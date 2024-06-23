let food = document.getElementById("food").value;
let Transportation = document.getElementById("Transportation").value;
let Bills = document.getElementById("Bills").value;
let Entertainment = document.getElementById("Entertainment").value;
let Others = document.getElementById("Others").value;
const totalBudget = food + Transportation + Bills + Entertainment + Others;
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
