const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*============ MENU SHOW ==========*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*============ MENU HIDDEN ==========*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*============ REMOVE MENU MOBILE ==========*/ 
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*============= SCROLL REVEAL ANIMATION ===========*/ 
const sr = ScrollReveal({
  distance: '90px',
  duration: 3000,
})

sr.reveal(`.home__data`, {origin: 'top', delay:400})
sr.reveal(`.home__img`, {origin: 'bottom', delay:600})
sr.reveal(`.progress__wrapper`, {origin: 'left', delay:800})


let number = document.getElementById("output").innerHTML = Math.floor(Math.random() * 70) + 30;

function countTo() {
  let from = number;
  let to = 1;
  let step = to > from ? 1 : -1;
  let interval = 10000;

  if(from == to) {
    document.querySelector("#output").textContent = from;
    return;
  }
  let counter = setInterval(function(){
    from += step;
    document.querySelector("#output").textContent = from;

    if(from == to) {
      clearInterval(counter);
    }
  }, interval);
}
countTo();

let circuleProgress = document.querySelector(".progress__circular");
    progressValue = document.querySelector(".progress__value");

let progressStartValue = 0;
    progressEndValue = 100;
    speed = 100;

let progress = setInterval(() => {
  progressStartValue++;
  progressValue.textContent = `${progressStartValue}%`
  circuleProgress.style.background = `conic-gradient(#ff00c4 ${progressStartValue * 3.6}deg, #ededed 0deg)`

  if(progressStartValue == progressEndValue) {
    clearInterval(progress);
  }

}, speed);


const popupBody = document.querySelector(".popup__body");
const homeButton = document.getElementById("home__button");
const homeButtonSecond = document.getElementById("home__button-second");
const popupContent = document.querySelector(".popup__content");
const popupClose = document.querySelector(".popup__close");

    homeButton.addEventListener("click", (e) => {
    document.body.classList.add("stop-scrolling");
    popupBody.classList.add("_active");
    popupContent.classList.add("_active");
})
    homeButtonSecond.addEventListener("click", (e) => {
    document.body.classList.add("stop-scrolling");
    popupBody.classList.add("_active");
    popupContent.classList.add("_active");
})

  popupClose.addEventListener("click", (e) => {
    document.body.classList.remove("stop-scrolling");
    popupBody.classList.remove("_active");
    popupContent.classList.remove("_active");
  })

const quizData = [
  {
      question: "Do you live in Republic of South Africa?",
      a: "Yes",
      b: "No",
  },
  {
      question: "Are you over 18 years old?",
      a: "Yes",
      b: "No",
  },
  {
      question: "What mobile device do you like?",
      a: "Apple",
      b: "Other",
  }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
}
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }

  function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
      if(answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }


submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {

    currentQuiz++

    if(currentQuiz < quizData.length) {
      loadQuiz()
    }else {
      quiz.innerHTML = 
      `

      <h2 class="quiz__title">You have answered ${quizData.length} out ${quizData.length} questions!</h2>
      <img class="quiz__gift" width: 250px; src="../img/gift.png" alt="Подарок">
      <button class="send__btn">Забрать подарок</button> 

      `
    }
  }
})

