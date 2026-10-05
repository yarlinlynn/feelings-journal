// IMPORT TAILWIND CSS:
import "./style.css";

// IMPORT COMPONENETS:
import { LoadingScreen } from "./screens/loadingScreen";
import { EntryFormScreen } from "./screens/entryFormScreen";

// IMPORT FUNCTIONALITY:
import { initTypingAnimation } from "./animations/typingAnimation";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");

    function render(screen) {
        app.innerHTML = screen();
    }

    // add click event to change screen 
    app.addEventListener("click", (event) => {
        if(event.target.matches("#newEntry")) {
            render(EntryFormScreen);
            console.log("new screen");
        }
        if(event.target.matches("#backtoLoadingScreen")) {
            render(LoadingScreen);
            console.log("back to loading screen");
        }
    })

    // render loading screen as first screen users see
    render(LoadingScreen);

    // initialize typing animation to loading screen text
    initTypingAnimation();
});