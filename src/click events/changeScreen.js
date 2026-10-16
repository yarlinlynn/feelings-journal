
// import different screen components
import { EntryFormScreen } from "../screens/entryFormScreen.js";
import { journalEntriesScreen } from "../screens/journalEntriesScreen.js";

// import functionality files
import { render } from "../utils/renderScreen.js";
import { changeScreenBackground } from "./changeBackground.js";
import { initEntryForm } from "../utils/entryForm.js";
// import { deleteEntry } from "../utils/entries.js";

// Display the journal entries screen after a successful save
export function showJournalEntries(app) {
    render(app, journalEntriesScreen);
    window.location.hash = "journalEntries"; // Update the URL hash to reflect the current screen
} 

// Display the entry form and initialize its functionality
export function showEntryForm(app) {
    render(app, EntryFormScreen)
    initEntryForm( () => showEntryForm(app)); // Navigate to the entries screen after a successful save
    changeScreenBackground(); // Initialize the emotion button background effects
    window.location.hash = "entryForm";
}

// Handle navigation to the entry form
export function changeScreenClick(app) {
    app.addEventListener("click", (event) => {
        if(event.target.matches("#newEntry")) {
            render(app, EntryFormScreen);
            initEntryForm( () => showJournalEntries(app)); // Pass a callback to navigate after saving
            changeScreenBackground(); // Initialize the emotion button background effects
            window.location.hash = "entryForm";
            console.log("new screen");
        }

        if(event.target.matches("#back-to-form")) {
            showEntryForm(app); // Return to the form from the journal entries screen
        }
    });
}