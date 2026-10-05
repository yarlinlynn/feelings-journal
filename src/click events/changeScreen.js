
import { LoadingScreen } from "../screens/loadingScreen.js";
import { EntryFormScreen } from "../screens/entryFormScreen.js";

import { render } from "../utils/renderScreen.js";
import { changeScreenBackground } from "./changeBackground.js";

export function changeScreenClick(app) {
    app.addEventListener("click", (event) => {
        if(event.target.matches("#newEntry")) {
            render(app, EntryFormScreen);
            changeScreenBackground();
            console.log("new screen");
        }
        if(event.target.matches("#backtoLoadingScreen")) {
            render(app, LoadingScreen);
            console.log("back to loading screen");
        }
    })
}