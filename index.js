feather.replace();
updateYear();

function updateYear() {
  const yearSpan = document.getElementById("year");
  yearSpan.innerText = new Date().getFullYear();
}

document.querySelectorAll("#blog-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const target = this.getAttribute("data-target");
    window.location.href = `/blog/?article=${target}`;
    loadContent(target);
  });
});
