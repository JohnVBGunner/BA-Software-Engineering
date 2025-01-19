// Questions for each role
const cabinCrewQuestions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"] },
    { question: "What is 5 - 3?", options: ["2", "3", "4"] },
    { question: "What is 3 * 1?", options: ["1", "3", "5"] },
  ];
  
  const flightCrewQuestions = [
    { question: "What is 6 / 2?", options: ["2", "3", "4"] },
    { question: "What is 10 - 5?", options: ["3", "4", "5"] },
    { question: "What is 8 - 6?", options: ["1", "2", "3"] },
  ];
  
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  
  // DOM Elements
  const startScreen = document.getElementById("start-screen");
  const questionScreen = document.getElementById("question-screen");
  const endScreen = document.getElementById("end-screen");
  const roleTitle = document.getElementById("role-title");
  const questionContainer = document.getElementById("question-container");
  
  // Start quiz based on role
  document.getElementById("cabin-crew-btn").addEventListener("click", () => {
    startQuiz("Cabin Crew", cabinCrewQuestions);
  });
  
  document.getElementById("flight-crew-btn").addEventListener("click", () => {
    startQuiz("Flight Crew", flightCrewQuestions);
  });
  
  // Initialize quiz
  function startQuiz(role, questions) {
    currentQuestions = questions;
    currentQuestionIndex = 0;
  
    startScreen.style.display = "none";
    questionScreen.style.display = "block";
  
    roleTitle.textContent = `${role} - Question 1`;
    displayQuestion();
  }
  
  // Display the current question
  function displayQuestion() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionContainer.innerHTML = `
      <div>
        <h2>${currentQuestion.question}</h2>
        ${currentQuestion.options
          .map(
            (option, idx) =>
              `<button class="option-btn" data-index="${idx}">${option}</button>`
          )
          .join("")}
      </div>
    `;
  
    document.querySelectorAll(".option-btn").forEach((button) => {
      button.addEventListener("click", nextQuestion);
    });
  }
  
  // Move to the next question or end the quiz
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
      roleTitle.textContent = `Question ${currentQuestionIndex + 1}`;
      displayQuestion();
    } else {
      questionScreen.style.display = "none";
      endScreen.style.display = "block";
    }
  }
  