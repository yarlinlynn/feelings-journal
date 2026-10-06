// IMPORT TAILWIND CSS:
import "./style.css";

// IMPORT COMPONENETS:
import { LoadingScreen } from "./screens/loadingScreen.js";
import { EntryFormScreen } from "./screens/entryFormScreen.js";

// IMPORT FUNCTIONALITY:
import { initTypingAnimation } from "./animations/typingAnimation.js";
import { changeScreenClick } from "./click events/changeScreen.js";
import { changeScreenBackground } from "./click events/changeBackground.js";

import { render } from "./utils/renderScreen.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");

    // add click event to change screen 
    changeScreenClick(app);

    // Restore the screen from the URL hash
    if(window.location.hash === "#entryForm") {
        render(app, EntryFormScreen);
        changeScreenBackground();
    } else {
        // render loading screen as first screen users see
        render(app, LoadingScreen);
        // initialize typing animation to loading screen text
        initTypingAnimation();
    }
});