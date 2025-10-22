console.log("### SHALLOW DEEP COPY ###");
// Shallow copy: não pega os itens aninhandos.
const htmlCourse = {
  course: "HTML",
  students: [{ name: "Lucas", email: "lucas@email" }], // esse array é considerado um objeto aninhado
};
// const jsCourse = {
//   ...htmlCourse,
//   course: "JavaScript",
// };
// vai sobrescrever os arrays de htmlCourse porque é uma referencia e não uma cópia.
// jsCourse.students.push({ name: "Valadão", email: "valadão@email" });

// Cópia profunda: pega os itens aninhandos. (Deep copy)
const jsCourse = {
  ...htmlCourse,
  course: "JavaScript",
  students: [
    ...htmlCourse.students,
    { name: "Valadão", email: "valadão@email" },
  ],
};

jsCourse.students.push({ name: "Maria Antonia", email: "maria@email" });

const jsCourse2 = {
  ...htmlCourse,
  course: "JS",
};
jsCourse2.students = [
  ...htmlCourse.students,
  { name: "Maria Antonia", email: "maria@email" },
];

console.log(htmlCourse, jsCourse, jsCourse2);
