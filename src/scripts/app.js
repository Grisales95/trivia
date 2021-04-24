// const { desorderPositionArray } = require("../utils/index");

// const preguntas = {
//   question: "Como se llama falcao",
//   difficult: "easy",
//   answer: "Radamel",
//   options: ["Jonas", "Alejandro", "Alberto", "Rafael"],
// };

// const newArray = desorderPositionArray(preguntas.options);

// console.log(newArray);



// // https://opentdb.com/api.php?amount=10
// fetch("https://opentdb.com/api.php?amount=10")
// .then(response => response.json())
// .then(data => printQuestions(data.results));

function getQuestion(){
  const totalQuestions = document.getElementById("n-questions").value;
  const categoryQuestions = document.getElementById("category").value;
  const difficultyQuestions = document.getElementById("difficulty").value;
  const typeQuestions = document.getElementById("type").value;
  const link = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${categoryQuestions}&difficulty=${difficultyQuestions}&type=${typeQuestions}`
  fetch(link)
    .then((response) => response.json())
    .then((data) => printQuestions(data.results))
}

function printQuestions(questions){
  const container = document.getElementById("container-question");
    questions.forEach((question) =>{
      container.innerHTML += `  <form>

      <p>
    
        Selecciona un área para trabajar en ella an area to work in:<br>
    
        <label><input type="radio" name="areatrabajo" value="ventas" required>${question.question}</label><br>
    
        <label><input type="radio" name="areatrabajo" value="it">${question.correct_answer}</label><br>
    
        <label><input type="radio" name="areatrabajo" value="planeamiento">${question.incorrect_answers[0]}</label><br>
    
        <label><input type="radio" name="areatrabajo" value="planeamiento">${question.incorrect_answers[1]}</label>
    
        <label><input type="radio" name="areatrabajo" value="planeamiento">${question.incorrect_answers[2]}</label>
    
        <label><input type="radio" name="areatrabajo" value="planeamiento">${question.incorrect_answers[3]}</label>
    
      </p>
    
      <p>
    
        <input type="submit" value="Enviar datos">
    
        <input type="reset" value="Restaurar formulario">
    
      </p>
    
    </form> `
    })
  };
  



 


// {/* <p>${question.question}</p>
//                               <p>${question.correct_answer}</p>
//                               <p>${question.incorrect_answers[0]}</p>
//                               <p>${question.incorrect_answers[1]}</p>
//                               <p>${question.incorrect_answers[2]}</p> */}