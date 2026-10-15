
// import different screen components
import { EntryFormScreen } from "../screens/entryFormScreen.js";
import { journalEntriesScreen } from "../screens/journalEntriesScreen.js";

// import functionality files
import { render } from "../utils/renderScreen.js";
import { changeScreenBackground } from "./changeBackground.js";
import { initEntryForm } from "../utils/entryForm.js";
import { deleteEntry } from "../utils/entries.js";

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
        const target = event.target; // Find the clicked element safely
        if (!(target instanceof Element)) return;

        // Handle Delete entry buttons in either layout.
        const deleteButton = target.closest(".delete-entry");

        if (deleteButton && app.contains(deleteButton)) {
            const entryId = deleteButton.dataset.entryId;
            if (!entryId) {
                console.error("Cannot delete entry: missing entry ID.");
                return;
            }

            // Confirm before permanently deleting the entry.
            const confirmed = window.confirm("Are you sure you want to delete this journal entry?");
            if (!confirmed) return;

            try {
               const deleted = deleteEntry(entryId); // Delete the selected entry from localStorage
               if (!deleted) {
                    console.warn("Journal entry was not found.");
                    return;
                }
                
                showJournalEntries(app); // Refresh the journal to display remaining entries.
            } catch(error) {
                console.error("Failed to delete journal entry:", error);
                window.alert("Unable to delete this entry. Please try again.");
            }
            return;
        }

        // Open the entry form from the landing screen.
        if (target.closest("#newEntry")) {
            showEntryForm(app);
            return;
        }

        // Return to the form from the journal screen.
        if (target.closest("#back-to-form")) {
            showEntryForm(app);
        }
    });
}