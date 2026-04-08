import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

export default function LeadComments({ leadId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const q = query(
        collection(db, "crm_leads", leadId, "comments"),
        orderBy("criado_em", "asc")
      );

      const snap = await getDocs(q);
      setComments(
        snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      );
      setLoading(false);
    }

    load();
  }, [leadId]);

  if (loading) {
    return <p className="text-sm text-gray-400">Carregando comentários…</p>;
  }

  if (comments.length === 0) {
    return (
      <p className="text-sm text-gray-400">
        Nenhum comentário ainda.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {comments.map((c) => (
        <div
          key={c.id}
          className="border border-gray-200 rounded-lg p-4"
        >
          <p className="text-sm text-gray-800 whitespace-pre-wrap">
            {c.texto}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            {c.autor_nome || "Sistema"} •{" "}
            {c.criado_em?.toDate?.().toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
