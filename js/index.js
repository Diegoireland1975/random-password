const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 15;
let inputOne = document.getElementById("pass-one");
let inputTwo = document.getElementById("pass-two");
let generatePassBtn = document.getElementById("btn-generate");
let addBtn = document.getElementById("add-btn");
let subBtn = document.getElementById("sub-btn");
let lengthBox = document.getElementById("length-box");

// get a random character from the array
function getRandomCharacter() {
  let runCharacter = Math.floor(Math.random() * characters.length);
  return characters[runCharacter];
}

// Click the button to generate the password
generatePassBtn.addEventListener("click", () => {
  inputOne.value = "";
  inputTwo.value = "";
  // for loop to get each random character from the array and insert in the input
  for (let i = 0; i < passwordLength; i++) {
    inputOne.value += getRandomCharacter();
    inputTwo.value += getRandomCharacter();
  }
});
// remove character to the password
subBtn.addEventListener("click", () => {
  passwordLength--;
  lengthBox.textContent = passwordLength;
  if (passwordLength < 0) {
    lengthBox.textContent = 0;
  }
});
// add character to the password
addBtn.addEventListener("click", () => {
  passwordLength++;
  lengthBox.textContent = passwordLength;
  if (passwordLength > 15) {
    lengthBox.textContent = 15;
  }
});
