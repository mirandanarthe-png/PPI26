//Questão 1 — Média de notas e filtro de aprovados//
const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const alunoNota = alunos.map((aluno) => ({
  nome: aluno.nome,
  media: aluno.notas.reduce(
    (media, nota) => media + nota / aluno.notas.length,
    0,
  ).toFixed(2),
}))
.filter(aluno => aluno.media <=7);
console.log(alunoNota);







//Questão 2 — Catálogo de filmes com busca e ordenação//
const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];
