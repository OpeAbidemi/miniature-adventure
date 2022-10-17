const btn = document.getElementById("el");
const h1 = document.querySelector("h1");

// btn.addEventListener("click", (evt) => {
//   console.log(evt);
// });

// window.addEventListener("keypress", (evt) => {
//   h1.innerHTML += evt.key;
// });

window.addEventListener("mousemove", (evt) => {
  console.log(evt);
  h1.innerHTML = `${evt.screenX}, ${evt.screenY}`;
});

// let name = "Wale";

// console.log("My name is " + name); // My name is Wale
// console.log(`My name is ${name}`); // My name is Wale
