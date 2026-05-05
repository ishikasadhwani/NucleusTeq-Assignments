// ==============================
// 🚨 INTENTIONALLY BUGGY CODE
// ==============================

// Global variable leak
leakedScore = 500;

// Duplicate function (overwrites existing one silently)
function switchPlayer() {
  console.log("This overrides original function"); // breaks logic
}

// Wrong DOM selector (null error)
const fakeElement = document.getElementById("does-not-exist");
fakeElement.textContent = "This will crash";

// Infinite loop (critical performance issue)
function freezeGame() {
  while (true) {
    console.log("Game frozen");
  }
}

// Calling infinite loop accidentally
// freezeGame();

// Async unhandled error
setTimeout(() => {
  throw new Error("Unhandled async error!");
}, 2000);

// Bad equality check
if (currentScore == "0") {
  console.log("Loose equality issue");
}

// Wrong winner logic (assignment instead of comparison)
if (savedScores[activePlayer] = 100) {
  console.log("This will always execute incorrectly");
}

// Reassigning const (runtime crash)
const maxScore = 100;
maxScore = 200;

// Unsafe HTML injection (XSS risk)
document.querySelector(".winner-message").innerHTML =
  `<img src=x onerror="alert('Hacked!')">`;

// Invalid array access
console.log(savedScores[5]); // undefined but no check

// Function with missing return
function calculateScore(a, b) {
  const result = a + b;
}

// Using result incorrectly
let total = calculateScore(10, 20);
console.log(total.toFixed(2)); // error: total is undefined

// Nested callback hell (bad practice)
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("Callback hell 😵");
    }, 1000);
  }, 1000);
}, 1000);

// Incorrect event listener (element doesn't exist)
document.querySelector(".unknown-btn").addEventListener("click", () => {
  console.log("This will fail");
});

// Mutating state incorrectly
savedScores.push(999); // breaks expected structure

// Race condition simulation
let gameState = "idle";

function startGameAsync() {
  gameState = "starting";

  setTimeout(() => {
    gameState = "running";
  }, Math.random() * 1000);
}

startGameAsync();
startGameAsync(); // called twice → inconsistent state

// Memory leak (interval never cleared)
setInterval(() => {
  console.log("Leaking memory...");
}, 1000);

// Accessing property of undefined
let player;
console.log(player.name);

// Bad JSON parsing (no error handling)
const badJSON = "{ name: 'Ishu' "; // invalid JSON
const parsed = JSON.parse(badJSON);

// Overwriting built-in object (very bad practice)
Array = function () {
  console.log("Array broken");
};

// Shadowing variable
let score = 10;
function updateScore() {
  let score = "ten"; // different type
  return score + 10; // string concat bug
}

// Unused variable
let unusedVar = "I am never used";

// Deep nesting (bad readability)
if (true) {
  if (true) {
    if (true) {
      if (true) {
        console.log("Too deeply nested");
      }
    }
  }
}

// Magic numbers (bad practice)
if (savedScores[activePlayer] > 97.34567) {
  console.log("Why this number?");
}

// Hardcoded credentials (security issue)
const password = "123456";

// Blocking UI thread
for (let i = 0; i < 1e9; i++) {}

// Wrong type operation
let num = 10;
num = num + "5"; // becomes string
console.log(num * 2); // NaN issue

// Function declared but never used
function unusedFunction() {
  console.log("I am useless");
}
