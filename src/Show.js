const more = document.getElementById("more");
const showmore = document.getElementById("showmore");
const showless = document.getElementById("showless");

function show() {
  more.style.display = "flex";
}

showmore.addEventListener("onclick", show);
