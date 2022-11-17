import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const more = document.getElementById("more");
const showmore = document.getElementById("showmore");
const showless = document.getElementById("showless");

const show = () => {
  more.style.display = "inline-block";
};

showmore.addEventListener(onclick, show);
