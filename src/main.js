// IMPORT TAILWIND CSS:
import "./style.css";

// IMPORT COMPONENETS:
import { LoadingScreen } from "./screens/loadingScreen";

// IMPORT FUNCTIONALITY:
import { initTypingAnimation } from "./animations/typingAnimation";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");

    function render(screen) {
        app.innerHTML = LoadingScreen();
    }

    // add click event to change screen 
    app.addEventListener("click", (event) => {
        if(event.target.matches("#newEntry")) {
            console.log("new screen");
        }
    })

    // render loading screen as first screen users see
    render(LoadingScreen());

    // initialize typing animation to loading screen text
    initTypingAnimation();
});