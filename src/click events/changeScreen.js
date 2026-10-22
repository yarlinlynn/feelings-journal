
// import different screen components
import { EntryFormScreen } from "../screens/entryFormScreen.js";
import { journalEntriesScreen, initializeJournalEntriesScreen } from "../screens/journalEntriesScreen.js";

// import functionality files
import { render } from "../utils/renderScreen.js";
import { changeScreenBackground } from "./changeBackground.js";
import { initEntryForm } from "../utils/entryForm.js";
import { animateScreen } from "../animations/animateScreen.js";

// Display the journal entries screen after a successful save
export function showJournalEntries(app) {
    animateScreen(app, () => {
        render(app, journalEntriesScreen);

        // Initialize the desktop Back and Next buttons after rendering
        initializeJournalEntriesScreen();
        window.location.hash = "journalEntries"; // Update the URL hash to reflect the current screen
    });
} 

// Display the entry form and initialize its functionality
export function showEntryForm(app) {
    animateScreen(app, () => {
        render(app, EntryFormScreen)
        initEntryForm( () => showJournalEntries(app)); // Navigate to the entries screen after a successful save
        changeScreenBackground(); // Initialize the emotion button background effects
        window.location.hash = "entryForm";
    });
}

// Handle navigation to the entry form
export function changeScreenClick(app) {
    app.addEventListener("click", (event) => {
        const target = event.target;
        // Open the entry form. 
        if (target.closest("#newEntry")) { 
            showEntryForm(app); 
            return; 
        }
        // Return to the entry form from the journal entries screen. 
        if (target.closest("#back-to-form")) { 
            showEntryForm(app); 
        }
    });
}

