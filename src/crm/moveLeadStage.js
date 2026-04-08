import { getFunctions, httpsCallable } from "firebase/functions";
import { getAuth } from "firebase/auth";
import { app } from "../firebase"; // ajuste o caminho se necessário

export async function moveLeadStage({ leadId, newStageId }) {
  const auth = getAuth(app);

  if (!auth.currentUser) {
    throw new Error("Usuário não autenticado");
  }

  const functions = getFunctions(app);
  const moveLeadStageFn = httpsCallable(functions, "moveLeadStageFn");

  const response = await moveLeadStageFn({
    leadId,
    newStageId,
  });

  return response.data;
}
