// IMPORT TAILWIND CSS:
import "./style.css";

// IMPORT COMPONENETS:
import { LoadingScreen } from "./screens/loadingScreen.js";
import { EntryFormScreen } from "./screens/entryFormScreen.js";
import { journalEntriesScreen } from "./screens/journalEntriesScreen.js";

// IMPORT FUNCTIONALITY:
import { initTypingAnimation } from "./animations/typingAnimation.js";
import { changeScreenClick, showJournalEntries } from "./click events/changeScreen.js";
import { changeScreenBackground } from "./click events/changeBackground.js";

import { render } from "./utils/renderScreen.js";
import { initEntryForm } from "./utils/entryForm.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");

    changeScreenClick(app); // Register the click handler for opening the entry form

    // Restore the appropriate screen based on the URL hash
    if(window.location.hash === "#entryForm") {
        render(app, EntryFormScreen);
        initEntryForm( () => showJournalEntries(app)); // Ensure the form can navigate to the entries screen after saving
        changeScreenBackground();
    } else if (window.location.hash === "#journalEntries") {
        showJournalEntries(app); // render the journal entries screen
    } else {
        render(app, LoadingScreen); // render loading screen as first screen users see
        initTypingAnimation(); // initialize typing animation to loading screen text
    }
});