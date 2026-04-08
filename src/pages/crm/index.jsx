import { KanbanBoard } from "../../components/kanban/KanbanBoard";

export default function CRM() {
  return (
    <div style={{ width: "100%", minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <KanbanBoard pipelineId="elevacredi-main" />
    </div>
  );
}

