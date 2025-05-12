import React, { useState } from "react";
import { toast } from "react-toastify";

const Rating = ({ lancheId }) => {
  const [rating, setRating] = useState(0);

  const enviarAvaliacao = async () => {
    if (rating === 0) {
      toast.warning("Selecione uma nota antes de enviar!");
      return;
    }

    const novaAvaliacao = {
      lancheId,
      estrelas: rating,
      data: new Date().toISOString()
    };

    try {
      const response = await fetch("http://localhost:3001/avaliacoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novaAvaliacao)
      });

      if (!response.ok) throw new Error("Erro ao enviar avaliação");

      toast.success("Avaliação enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar avaliação:", error);
      toast.error("Erro ao enviar avaliação.");
    }
  };

  return (
    <div>
      <div className="estrelas">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            style={{ cursor: "pointer", color: num <= rating ? "#ffc107" : "#e4e5e9" }}
            onClick={() => setRating(num)}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={enviarAvaliacao}>Enviar</button>
    </div>
  );
};

export default Rating;
