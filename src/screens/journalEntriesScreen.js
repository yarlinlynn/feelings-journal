
import { getEntries } from "../utils/entries.js";

// import either mobile or deskop screen content
import { mobileEntries } from "../components/mobileEntries.js";
import { desktopEntries } from "../components/desktopEntries.js";

export function journalEntriesScreen() {
    const entries = getEntries();
    console.log("Entries rendered on journal screen:", entries);
    const screenWidth = window.innerWidth;

    const entriesContent = screenWidth < 500 ? mobileEntries(entries) : desktopEntries(entries);

    return `
        <section id="journal-entries" class="min-h-screen">

            <!-- Navigate back to the entry form. -->
            <button id="back-to-form" type="button"
                class="text-base font-semibold px-6 py-3 bg-white text-[#222222] rounded-full shadow mt-4 mb-8"
            >
                ← Write another entry
            </button>

            <h1 class="text-4xl mb-6 text-center">
                My Journal Entries
            </h1>
            
            <!-- Only the entries layout changes. -->
                ${entriesContent}
        </section>
    `;
}