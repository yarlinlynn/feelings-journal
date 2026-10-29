
import { getEntries } from "../utils/entries.js";

// import either mobile or deskop screen content
import { mobileEntries, initializeMobileEntries } from "../components/mobileEntries.js";
import { desktopEntries, initializeDesktopEntries } from "../components/desktopEntries.js";

export function journalEntriesScreen() {
    const entries = getEntries();
    console.log("Entries rendered on journal screen:", entries);
    const screenWidth = window.innerWidth;

    const entriesContent = screenWidth < 900 ? mobileEntries(entries) : desktopEntries(entries);

    return `
        <section id="journal-entries" 
            class="min-h-screen absolute inset-0 -z-10 rounded-[inherit]
            bg-[#fffcf5] [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
            [background-size:12px_12px] overflow-hidden"
        >
            
            <!-- Only the entries layout changes. -->
                ${entriesContent}

            <!-- Navigate back to the entry form. -->
            <button id="back-to-form" type="button"
                class="text-base font-semibold px-2 py-2 bg-white text-[#222222] rounded-full shadow mt-4 mb-8 absolute top-7 right-5 flex gap-1 items-center justify-center text-3xl"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                <span class="hidden md:block">Add Another Entry</span>
            </button>
        </section>
    `;
}

// Call this after the screen HTML has been inserted into the DOM. 
export function initializeJournalEntriesScreen() { 
    const entries = getEntries();
    if (window.innerWidth < 900) {
        return initializeMobileEntries(entries);
    }

    return initializeDesktopEntries(entries);
}