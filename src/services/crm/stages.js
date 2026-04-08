// Firebase import removed to decouple from backend as requested
// import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
// import { db } from "../../firebase";

export async function getStages(pipelineId) {
  // Simulando array mockado de estágios para ELEVACREDI
  return [
    { id: "prospeccao_ia", pipeline_id: pipelineId, ativo: true, ordem: 1, nome: "Prospecção IA" },
    { id: "atendimento_humano", pipeline_id: pipelineId, ativo: true, ordem: 2, nome: "Atendimento Humano" },
    { id: "analise_credito", pipeline_id: pipelineId, ativo: true, ordem: 3, nome: "Análise de Crédito" },
    { id: "contrato_assinado", pipeline_id: pipelineId, ativo: true, ordem: 4, nome: "Contrato Assinado" },
  ];
}
