const delayTime = 500;
const myQuestion = document.getElementById('myQuestion');
const myAnswer = document.getElementById('myAnswer');
const quizWrapper = document.getElementById('quizWrapper');
const questionBox = document.getElementById('questionBox');
const resultBox = document.getElementById('resultBox');
const quizTitle = document.getElementById('quizTitle');

let counter = 0; 
let quiz;
let playerData = {};

function init(){
    quiz = quiz1;
    initQuiz();
}

function initQuiz(){
  playerData.goodAnswers = 0;
  playerData.wrongAnswers = 0;
  playerName = "";
  resultBox.style.display = "none";
  quizTitle.innerHTML=quiz.quizMetaData.title;
  prepareQuestions();
}

function show_image(src, width, height) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;


  document.body.appendChild(img);
}

function prepareQuestions() {
  questionBox.className = "questionBox-new";
  let quizImage = quiz.quizMetaData.imageURI;
  quizWrapper.style.backgroundImage = "url("+ quizImage + ")";
  quizWrapper.style.backgroundRepeat = "no-repeat";
  quizWrapper.style.backgroundPosition = "right";
  quizWrapper.style.backgroundSize = "25%";
  quiz.answerClicked = false;


  if (counter < quiz.quizContent.length) {
    myQuestion.innerHTML = quiz.quizContent[counter].question;
    myAnswer.innerHTML = ""; 
    for (let i = 0; i < quiz.quizContent[counter].answers.length; i++) {
      let answer = document.createElement('li');
      answer.className = "answer";
      answer.score = quiz.quizContent[counter].answers[i].feedback;
      answer.innerHTML = quiz.quizContent[counter].answers[i].answer;
      myAnswer.appendChild(answer);
      answer.addEventListener('click', evaluate, true)
    }

  } 
  else 
  {
    finishQuiz();
  }
}

function evaluate(evt) {
  if(!quiz.answerClicked){
    if (evt.target.score) {
      evt.target.className = "right";
      playerData.goodAnswers += 1;
      console.log("correct answer");
    }
    quiz.answerClicked=true;
  }
  counter++;
  questionBox.className = "questionBox";
  setTimeout(prepareQuestions, delayTime);
}

function finishQuiz() {
  if(playerData.goodAnswers == 1 || playerData.goodAnswers == 2){
        resultBox.innerHTML = "<h2>Uw favourite kunstwerk is:</h2>"
        resultBox.innerHTML +="<img src=\"https://cdn.discordapp.com/attachments/780426570849976382/799654987717279754/porselein.PNG\" width=\"250px\" height=\"150px\">";
  }


  if(playerData.goodAnswers == 3 || playerData.goodAnswers == 4){

        resultBox.innerHTML = "<h2>Uw favourite kunstwerk is:</h2>"
        resultBox.innerHTML +="<img src=\"https://cdn.discordapp.com/attachments/780426570849976382/799654986802790411/doos.PNG\" width=\"250px\" height=\"350px\">";
  }
  questionBox.style.display = "none";
  resultBox.style.display = "block";

  quizWrapper.style.background = "";
}

init(); 