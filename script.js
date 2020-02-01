const sections = document.querySelectorAll(".section-button");
// const content = document.querySelectorAll(".content");

function openContent() {
  this.classList.toggle("active");

  let content = this.querySelector(".content");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

sections.forEach(section => section.addEventListener("click", openContent));
