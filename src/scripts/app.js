const { desorderPositionArray } = require("../utils/index");

const preguntas = {
  question: "Como se llama falcao",
  difficult: "easy",
  answer: "Radamel",
  options: ["Jonas", "Alejandro", "Alberto", "Rafael"],
};

const newArray = desorderPositionArray(preguntas.options);

console.log(newArray);
