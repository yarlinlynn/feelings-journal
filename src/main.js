// IMPORT TAILWIND CSS:
import "./style.css";

// IMPORT COMPONENETS:
import { LoadingScreen } from "./components/loadingScreen";

// IMPORT FUNCTIONALITY:

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");
    app.innerHTML = `
        ${LoadingScreen()}
    `;
});