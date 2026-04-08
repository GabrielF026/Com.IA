import * as admin from "firebase-admin";
import { onCall, HttpsError } from "firebase-functions/v2/https";
import { moveLeadStageLogic } from "./leads/moveLeadStage";

admin.initializeApp();

export const moveLeadStageFn = onCall(async (request) => {
  const { data, auth } = request;

  if (!auth) {
    throw new HttpsError(
      "unauthenticated",
      "Usuário não autenticado"
    );
  }

  const { leadId, newStageId } = data as {
    leadId?: string;
    newStageId?: string;
  };

  if (!leadId || !newStageId) {
    throw new HttpsError(
      "invalid-argument",
      "leadId e newStageId são obrigatórios"
    );
  }

  return moveLeadStageLogic(
    leadId,
    newStageId,
    auth.uid
  );
});
