const sections = document.querySelectorAll(".section-button");
// const content = document.querySelectorAll(".content");

function openContent() {
  this.classList.toggle("active");

  let content = this.querySelector(".content");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.visibility = "invisible";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.visibility = "visible";
  }
}

sections.forEach(section => section.addEventListener("click", openContent));
