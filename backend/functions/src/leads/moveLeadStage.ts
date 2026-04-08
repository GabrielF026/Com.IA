import * as admin from "firebase-admin";

const db = admin.firestore();

export async function moveLeadStageLogic(
  leadId: string,
  newStageId: string,
  userId: string
) {
  return await db.runTransaction(async (tx) => {
    /* ---------------------------------------------------
     * 1. Buscar lead
     * --------------------------------------------------- */
    const leadRef = db.collection("crm_leads").doc(leadId);
    const leadSnap = await tx.get(leadRef);

    if (!leadSnap.exists) {
      throw new Error("Lead não encontrado");
    }

    const leadData = leadSnap.data()!;
    const {
      pipeline_id: leadPipelineId,
      stage_id: oldStageId,
    } = leadData;

    /* ---------------------------------------------------
     * 2. Buscar stage destino
     * --------------------------------------------------- */
    const stageRef = db.collection("crm_stages").doc(newStageId);
    const stageSnap = await tx.get(stageRef);

    if (!stageSnap.exists) {
      throw new Error("Stage de destino não encontrado");
    }

    const stageData = stageSnap.data()!;

    /* ---------------------------------------------------
     * 3. Validações
     * --------------------------------------------------- */
    if (stageData.pipeline_id !== leadPipelineId) {
      throw new Error(
        "Stage não pertence ao pipeline do lead"
      );
    }

    if (!stageData.ativo) {
      throw new Error("Stage de destino está inativo");
    }

    const requiredFields: string[] =
      stageData.campos_obrigatorios || [];

    const missingFields = requiredFields.filter((field) => {
      const value = leadData[field];
      return value === undefined || value === null || value === "";
    });

    if (missingFields.length > 0) {
      throw new Error(
        `Campos obrigatórios não preenchidos: ${missingFields.join(", ")}`
      );
    }

    /* ---------------------------------------------------
     * 4. Atualizar lead
     * --------------------------------------------------- */
    tx.update(leadRef, {
      stage_id: newStageId,
      encerrado: stageData.is_final === true,
      updated_at: admin.firestore.FieldValue.serverTimestamp(),
    });

    /* ---------------------------------------------------
     * 5. Criar evento
     * --------------------------------------------------- */
    const eventRef = db.collection("crm_events").doc();

    tx.set(eventRef, {
      type: "STAGE_MOVED",
      leadId,
      pipelineId: leadPipelineId,
      fromStageId: oldStageId,
      toStageId: newStageId,
      userId,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    /* ---------------------------------------------------
     * 6. Retorno
     * --------------------------------------------------- */
    return {
      success: true,
      from: oldStageId,
      to: newStageId,
      isFinal: stageData.is_final === true,
    };
  });
}
