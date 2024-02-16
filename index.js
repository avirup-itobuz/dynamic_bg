document.addEventListener("click", (e) => {
  console.log(e.target);
  document.body.style.backgroundColor = e.target.innerText;
});
