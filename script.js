const quizForm = document.getElementById('quiz-form1');
const resultDiv = document.getElementById('result1');

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm.elements['q1'].value;
  if (selectedAnswer === 'Paris') {
    resultDiv.innerHTML = 'Correct answer!';
    resultDiv.style.color = 'green';
  } else {
    resultDiv.innerHTML = 'Wrong answer. The correct answer is Paris.';
    resultDiv.style.color = 'red';
  }
});

// QUESTION 2

const quizForm2 = document.getElementById('quiz-form2');
const resultDiv2 = document.getElementById('result2');

quizForm2.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm2.elements['q2'].value;
  if (selectedAnswer === 'Delhi') {
    resultDiv2.innerHTML = 'Correct answer!';
    resultDiv2.style.color = 'green';
  } else {
    resultDiv2.innerHTML = 'Wrong answer. The correct answer is Delhi.';
    resultDiv2.style.color = 'red';
  }
});

// QUESTION 3

const quizForm3 = document.getElementById('quiz-form3');
const resultDiv3 = document.getElementById('result3');
const fillInput = document.getElementById("fill-blank")

quizForm3.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = fillInput.value;
  if (selectedAnswer === 'whale') {
    resultDiv3.innerHTML = 'Correct answer!';
    resultDiv3.style.color = 'green';
  } else {
    resultDiv3.innerHTML = 'Wrong answer. The correct answer is whale.';
    resultDiv3.style.color = 'red';
  }
});



// QUESTION 4

const quizForm4 = document.getElementById('quiz-form4');
const resultDiv4 = document.getElementById('result4');

quizForm4.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm4.elements['q4'].value;
  if (selectedAnswer === 'State Election Commission') {
    resultDiv4.innerHTML = 'Correct answer!';
    resultDiv4.style.color = 'green';
  } else {
    resultDiv4.innerHTML = 'Wrong answer. The correct answer is State Election Commission.';
    resultDiv4.style.color = 'red';
  }
});


// QUESTION 5

const quizForm5 = document.getElementById('quiz-form5');
const resultDiv5= document.getElementById('result5');

quizForm5.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm5.elements['q5'].value; 
  if (selectedAnswer === 'Rainfed farming') {
    resultDiv5.innerHTML = 'Correct answer!';
    resultDiv5.style.color = 'green';
  } else {
    resultDiv5.innerHTML = 'Wrong answer. The correct answer is Rainfed farming .';
    resultDiv5.style.color = 'red';
  }
});



// QUESTION 6

const quizForm6 = document.getElementById('quiz-form6');
const resultDiv6= document.getElementById('result6');

quizForm6.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm6.elements['q6'].value; 
  if (selectedAnswer === '0xnf029L') {
    resultDiv6.innerHTML = 'Correct answer!';
    resultDiv6.style.color = 'green';
  } else {
    resultDiv6.innerHTML = 'Wrong answer. The correct answer is 0xnf029L.';
    resultDiv6.style.color = 'red';
  }
});


// QUESTION 7

const quizForm7 = document.getElementById('quiz-form7');
const resultDiv7= document.getElementById('result7');

quizForm7.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm7.elements['q7'].value; 
  if (selectedAnswer === 'Bytecode is executed by JVM') {
    resultDiv7.innerHTML = 'Correct answer!';
    resultDiv7.style.color = 'green';
  } else {
    resultDiv7.innerHTML = 'Wrong answer. The correct answer Bytecode is executed by JVM.';
    resultDiv7.style.color = 'red';
  }
});


// QUESTION 8

const quizForm8= document.getElementById('quiz-form8');
const resultDiv8= document.getElementById('result8');

quizForm8.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm8.elements['q8'].value; 
  if (selectedAnswer === 'JDB') {
    resultDiv8.innerHTML = 'Correct answer!';
    resultDiv8.style.color = 'green';
  } else {
    resultDiv8.innerHTML = 'Wrong answer. The correct answer is JDB.';
    resultDiv8.style.color = 'red';
  }
});


// QUESTION 9

const quizForm9= document.getElementById('quiz-form9');
const resultDiv9= document.getElementById('result9');

quizForm9.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm9.elements['q9'].value; 
  if (selectedAnswer === 'does') {
    resultDiv9.innerHTML = 'Correct answer!';
    resultDiv9.style.color = 'green';
  } else {
    resultDiv9.innerHTML = 'Wrong answer. The correct answer is does.';
    resultDiv9.style.color = 'red';
  }
});

// QUESTION 10

const quizForm10= document.getElementById('quiz-form10');
const resultDiv10= document.getElementById('result10');

quizForm10.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm10.elements['q10'].value; 
  if (selectedAnswer === 'short') {
    resultDiv10.innerHTML = 'Correct answer!';
    resultDiv10.style.color = 'green';
  } else {
    resultDiv10.innerHTML = 'Wrong answer. The correct answer is short.';
    resultDiv10.style.color = 'red';
  }
});