const more = document.getElementById("more");
const showmore = document.getElementById("showmore");
const showless = document.getElementById("showless");

function show() {
  more.style.display = "flex";
  showmore.style.display = "none";
  showless.style.display = "inline";
}

function hide() {
  more.style.display = "none";
  showmore.style.display = "inline";
  showless.style.display = "none";
}
