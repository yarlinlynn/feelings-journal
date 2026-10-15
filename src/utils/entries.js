
const STORAGE_KEY = "journalEntries";

/**
 * Retrieve all previously saved journal entries or return an empty array when no entries have been saved yet
*/
export function getEntries() {
    return JSON.parse( localStorage.getItem(STORAGE_KEY) || "[]" );
}

/**
 * Add a new entry to the existing array and save the updated array
*/
export function saveEntry(entry) {
    const entries = getEntries();

    entries.push({
        id: crypto.randomUUID(),
        ...entry,
        date: new Date().toISOString()
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

/**
 * Delete a single entry using its unique ID
*/
export function deleteEntry(entryId) {
    const entries = getEntries();

    // Find out whether the entry exists that you want to delete
    const doesEntryExist = entries.some( (entry) => entry.id === entryId);
    if (!doesEntryExist) {
        return false;
    }

    // Keep every entry except the one being deleted
    const updatedEntries = entries.filter( (entry) => entry.id !== entryId);

    // Save the updated array back to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
    return true; 
}