import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoticeList from "./components/NoticeList";

function App() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Secitex Macau 2026",
      category: "Evento",
      description: "Inscrições abertas para oficinas e palestras.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, justo sit amet pretium egestas, libero elit gravida nisl, sed faucibus nibh elit quis leo. Ut sed iaculis ligula. Vivamus ac dolor sem. Phasellus interdum mi id felis hendrerit, id dapibus massa ultrices. Integer vel finibus velit. Aliquam nec arcu id mi laoreet tempor. Cras ut dolor sed ante congue interdum eu a magna.",
      author: "COINF/MC",
      date: "01/07/2026",
      featured: true,
    },
    {
      id: 2,
      title: "Manutenção do Lab. de Informática 2",
      category: "Aviso",
      description: "Indisponível na sexta 03/07/2026",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "CTI/MC",
      date: "01/07/2026",
      featured: false,
    },
  ]);

  function handleToggleFeatured(id) {
    setNotices((notices) =>
      notices.map(
        (notice) =>
          notice.id === id ? { ...notice, featured: !notice.featured } : notice,
      ),
    );
  }

  function handleDeleteNotice(id) {
    setNotices((notices) => notices.filter((notice) => notice.id !== id));
  }

  return (
    <>
      <Header
        title={"Programação para Internet"}
        subtitle={"Curso Técnico Integrado em Informática"}
      />
      <NoticeList
        notices={notices}
        onToggleFeatured={handleToggleFeatured}
        onDeleteNotice={handleDeleteNotice}
      />
    </>
  );
}

export default App;