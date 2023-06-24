import "../css/main.css";
import javascriptLogo from "../javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "../js/counter";
import { applyAllEffects } from "../js/letter-animations";

// setupCounter(document.querySelector("#counter"));
document.addEventListener("DOMContentLoaded", function(){
  applyAllEffects();
  window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("body").classList.add("loaded");
  });
  

}
);
