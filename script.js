function checkNumber() {
  const num = Number(document.getElementById("num1").value);
  const res = document.getElementById("res1");
  if (num > 0) res.innerText = "Positive";
  else if (num < 0) res.innerText = "Negative";
  else if (num === 0) res.innerText = "Zero";
  else if (num === "") res.innerText = "Please enter a number";
}
b1 = document.getElementById("btn1");
b1.onclick = checkNumber;

function checkVote() {
  const age = Number(document.getElementById("age1").value);
  const res = document.getElementById("res2");
  if (age >= 18) res.innerText = "You are eligible to vote.";
  else res.innerText = "You are not eligible to vote.";
}
b2 = document.getElementById("btn2");
b2.onclick = checkVote;

function checkPassword() {
  const pass = document.getElementById("pass").value;
  const res = document.getElementById("res3");
  res.innerText = pass === "python123" ? "Access granted" : "Access denied";
}
b3 = document.getElementById("btn3");
b3.onclick = checkPassword;

function compareNumbers() {
  const a = Number(document.getElementById("numA").value);
  const b = Number(document.getElementById("numB").value);
  const res = document.getElementById("res4");
  if (a > b) res.innerText = "First number is greater.";
  else if (a < b) res.innerText = "First number is smaller.";
  else res.innerText = "Both numbers are equal.";
}
b4 = document.getElementById("btn4");
b4.onclick = compareNumbers;

function evenOdd() {
  const num = Number(document.getElementById("num5").value);
  const res = document.getElementById("res5");
  res.innerText = num % 2 === 0 ? "Even" : "Odd";
}
b5 = document.getElementById("btn5");
b5.onclick = evenOdd;

function checkTemp() {
  const t = Number(document.getElementById("temp").value);
  const res = document.getElementById("res6");
  if (t > 30) res.innerText = "It’s a hot day.";
  else if (t >= 20 && t <= 30) res.innerText = "It’s a warm day.";
  else res.innerText = "It’s a cold day.";
}
b6 = document.getElementById("btn6");
b6.onclick = checkTemp;

function checkAgeGroup() {
  const age = Number(document.getElementById("age2").value);
  const res = document.getElementById("res7");
  if (age < 13) res.innerText = "Child";
  else if (age <= 19) res.innerText = "Teenager";
  else res.innerText = "Adult";
}
b7 = document.getElementById("btn7");
b7.onclick = checkAgeGroup;

function checkGrade() {
  const s = Number(document.getElementById("score").value);
  const res = document.getElementById("res8");
  if (s >= 90) res.innerText = "Grade A";
  else if (s >= 80) res.innerText = "Grade B";
  else if (s >= 70) res.innerText = "Grade C";
  else if (s >= 60) res.innerText = "Grade D";
  else if (s >= 50) res.innerText = "Grade E";
  else res.innerText = "Grade F";
}
b8 = document.getElementById("btn8");
b8.onclick = checkGrade;

function checkAdult() {
  const year = Number(document.getElementById("birthYear").value);
  const age = new Date().getFullYear() - year;
  const res = document.getElementById("res9");
  res.innerText = age >= 18 ? "You are an adult." : "You are not an adult yet.";
}
b9 = document.getElementById("btn9");
b9.onclick = checkAdult;

function findLargest() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);
  const n3 = Number(document.getElementById("n3").value);
  const res = document.getElementById("res10");
  const largest = Math.max(n1, n2, n3);
  res.innerText = `Largest number is ${largest}`;
}
b10 = document.getElementById("btn10");
b10.onclick = findLargest;
