// IMPORT TAILWIND CSS:
import "./style.css";

// IMPORT COMPONENETS:
import { LoadingScreen } from "./components/loadingScreen";

// IMPORT FUNCTIONALITY:
import { initTypingAnimation } from "./Animations/typingAnimation";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");
    app.innerHTML = `
        ${LoadingScreen()}
    `;

    initTypingAnimation();
});