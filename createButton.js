const arr = ["red", "blue", "green", "aqua", "purple", "magenta"];
let count = 0;
const container = document.getElementById("container");
const btn = document.getElementById("color");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = arr[count++ % 6];
  console.log(count);
  if ((count + 1) % 6 == 0) {
    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerText = "Created Button";
    container.appendChild(button);
  }
});
