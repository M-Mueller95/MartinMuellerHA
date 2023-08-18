alert ("Testgebiet, betreten auf eigene Gefahr")



const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

const questions = [
  {
    question: 'In welchem Jahr kam das Lied "We Will Rock You" von Queen raus?',
    answers: {
      a: '1985',
      b: '2001',
      c: '1977'
    },
    correctAnswer: 'c'
  },
   {
    question: 'Welcher Song ist von der Musikgruppe AC/DC?',
    answers: {
      a: 'I am Still Standing',
      b: 'Highway to Hell',
      c: '99 Luftballons'
    },
    correctAnswer: 'b'
  },
   {
    question: 'Aus welchem Land stammt der Sänger Falco?',
    answers: {
      a: 'Deutschland',
      b: 'Österreich',
      c: 'Schweiz'
    },
    correctAnswer: 'b'
  }
];




function buildQuiz() {
    const output = [];
  
    questions.forEach((question, index) => {
      const answers = [];
      for (const letter in question.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${index}" value="${letter}">
             ${letter}: ${question.answers[letter]}
           </label>`
           
        );
      }
  
      output.push(
        `
        
         <div class="question">${question.question}</div>
         <div class="answers">${answers.join('')}</div>
         <br>
         <br>
         
         `
      );
    });
  



    quizContainer.innerHTML = output.join('');}
    

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
  
    questions.forEach((question, index) => {
      const answerContainer = answerContainers[index];
      const selector = `input[name=question${index}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      const overlay = document.getElementById(`overlay`);
      overlay.style.display=`block`;
      const resultContainer = document.getElementById(`result`);
      resultContainer.style.display = `block`;



      if (userAnswer === question.correctAnswer) {
        numCorrect++;
        answerContainer.style.color = 'green';
      } else {
        answerContainer.style.color = 'red';
      }
    });
    
   
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
      
        resultContainer.innerHTML = `Du hast ${numCorrect} von ${questions.length} Fragen richtig beantwortet.`;

        const restartButton = document.getElementById(`restartButton`);
        restartButton.style.display = `block`;
        

        
      }
      
      function restartQuiz() {
        
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        resultContainer.style.display = `none`,
      
        quizContainer.innerHTML = '';
        buildQuiz();
        
    }

   
    
  buildQuiz();
  submitButton.addEventListener('click', showResults);


