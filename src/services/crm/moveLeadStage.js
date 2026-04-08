// import { httpsCallable } from "firebase/functions";
// import { functions } from "../../firebase";

export async function moveLeadStage(leadId, newStageId) {
  if (!leadId || !newStageId) {
    throw new Error("leadId e newStageId são obrigatórios");
  }

  // Simulando sucesso imediato
  console.log(`[MUX] API Mock: Movendo lead ${leadId} para stage ${newStageId}`);
  return { success: true };
}
