import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function AddCommentInput({ leadId }) {
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!texto.trim()) return;

    setLoading(true);

    await addDoc(
      collection(db, "crm_leads", leadId, "comments"),
      {
        texto,
        autor_id: "demo",
        autor_nome: "Consultor",
        criado_em: serverTimestamp(),
      }
    );

    setTexto("");
    setLoading(false);
  }

  return (
    <div className="flex gap-2">
      <textarea
        rows={2}
        placeholder="Escreva um comentário…"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="flex-1 resize-none border rounded-lg p-3 text-sm focus:ring-2 focus:ring-black outline-none"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-black text-white px-4 rounded-lg hover:bg-opacity-80 disabled:opacity-50"
      >
        Enviar
      </button>
    </div>
  );
}
