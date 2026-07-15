import "./App.css";
import Header from "./components/Header";

function App() {
  const notices = [
    {
      id: 1,
      title: "Secitex Macau 2026",
      category: "Evento",
      description: "Inscrições abertas para oficinas e palestras.",
      author: "COINF/MC",
      date: "01/07/2026",
      featured: true,
    },
    {
      id: 2,
      title: "Manutenção do Lab. de Informática 2",
      category: "Aviso",
      description: "Indisponível na sexta 03/07/2026",
      author: "CTI/MC",
      date: "01/07/2026",
      featured: false,
    },
  ];

  return (
    <>
      <Header
        title={"Programação para Internet"}
        subtitle={"Curso Técnico Integrado em Informática"}
      />
      <main className="main">
        <h1>Mural Digital do IFRN - Campus Macau</h1>

        {notices.map((notice) => (
          <article>
            <p>{notice.category}</p>
            <h3>{notice.title}</h3>
            <p>{notice.description}</p>
            <div>
              <span>Por: {notice.author}</span>
              <span>Data: {notice.date}</span>
            </div>
          </article>
        ))}

      </main>
    </>
  );
}

export default App;