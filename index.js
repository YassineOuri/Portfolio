feather.replace();
updateYear();

function updateYear() {
  const yearSpan = document.getElementById("year");
  yearSpan.innerText = new Date().getFullYear();
}
