const pages = document.querySelectorAll(".page");
let index = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  if (index < pages.length) {
    pages[index].classList.add("flip");
    index++;
  }
});
