import "./NoticeCard.css";

function NoticeCard({ notice, onTooggleFeatured }) {
    return (
        <article className={`notice-card ${notice.featured && "featured"}`}>
            <p>{notice.category}</p>
            <h3>{notice.title}</h3>
            <p>{notice.description}</p>
            <div classeName="notice-meta">
                <span>Por: {notice.author}</span>
                <span>Data: {notice.date}</span>
            </div>
            <div classeName="notice-actions">
                <button onClick={() =>onTooggleFeatured(notice.id)}>
                    Destacar
                </button>

            </div>
        </article>
    );
}

export default NoticeCard;
