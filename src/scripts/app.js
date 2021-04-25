const { desorderPositionArray } = require("../utils/index");

// const preguntas = {
//   question: "Como se llama falcao",
//   difficult: "easy",
//   answer: "Radamel",
//   options: ["Jonas", "Alejandro", "Alberto", "Rafael"],
// };



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


function hiddeForm(){
  document.getElementById("form-cont").classList.add("dp-none");
  
}



function printQuestions(questions){
  const container = document.getElementById("container-question");
    questions.forEach((question, index) =>{


      container.innerHTML += `  <form class = "form-test" id = "hidde${index}">

        <div class = "question-form" onsubmit="event.preventDefault()">
       
        <h2>${question.question}</h2>
        </div>

        <div class = "answer-form">

        <label><input type="radio" name="answer" value="correct_answer" required>${question.correct_answer}</label>
    
        <label><input type="radio" name="answer" value="answer2">${question.incorrect_answers[0]}</label>
    
        <label><input type="radio" name="answer" value="answer3">${question.incorrect_answers[1]}</label>
    
        <label><input type="radio" name="answer" value="answer4">${question.incorrect_answers[2]}</label>

        <button type="submit">NEXT</button>

      </div>
    
    </form> `
    })
  };

  function hiddeQuestions(){
    document.getElementById("hidde1").classList.add("dp-none")
  }
  



 


// {/* <p>${question.question}</p>
//                               <p>${question.correct_answer}</p>
//                               <p>${question.incorrect_answers[0]}</p>
//                               <p>${question.incorrect_answers[1]}</p>
//                               <p>${question.incorrect_answers[2]}</p> */}