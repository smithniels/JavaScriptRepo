//initialising a variable name data

let data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
  data = ++data;
  document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
  data = data - 1;
  document.getElementById("counting").innerText = data;
}

// reset function
function reset() {
  data = 0;
  document.getElementById("counting").innerText = data;
}

// const lotsOfDecimal = 1.7665849587;
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// alert(twoDecimalPlaces); // 1.77

// let myInt = 123;
// let myFloat = 1.2345;

// typeof myInt;
// mF = typeof myFloat;
// alert(mF); // number

// function updateName() {
//   const name = prompt("Enter a new name!");

//   if (name) {
//     button.textContent = `Player 1: ${name}`;
//   }
// }

// const button = document.querySelector("button");

// button.addEventListener("click", updateName);
