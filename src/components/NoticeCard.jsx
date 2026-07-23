import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

      {showDetails && (
        <p className="notice-full-description">
          {notice.fullDescription || notice.description}
        </p>
      )}

      <div className="notice-meta">
        <span>Por: {notice.author}</span>
        -
        <span>Data: {notice.date}</span>
      </div>
      <div className="notice-actions">

        
        <button
          className="details"
          onClick={() => setShowDetails((value) => !value)}
        >
          {showDetails ? "Fechar Detalhes" : "Exibir Detalhes"}
        </button>


        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>


        <button className="delete" onClick={() => onDelete(notice.id)}>
          Excluir
        </button>


      </div>
    </article>
  );
}

export default NoticeCard;