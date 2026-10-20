
import { getEntries } from "../utils/entries.js";

// import either mobile or deskop screen content
import { mobileEntries } from "../components/mobileEntries.js";
import { desktopEntries, initializeDesktopEntries } from "../components/desktopEntries.js";

export function journalEntriesScreen() {
    const entries = getEntries();
    console.log("Entries rendered on journal screen:", entries);
    const screenWidth = window.innerWidth;

    const entriesContent = screenWidth < 500 ? mobileEntries(entries) : desktopEntries(entries);

    return `
        <section id="journal-entries" 
            class="min-h-screen absolute inset-0 -z-10 rounded-[inherit]
            bg-[#fffcf5]
            bg-[url('https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg?width=126&height=126')]
            bg-repeat bg-left-top bg-[length:31.5px_auto] border-0"
        >
            
            <!-- Only the entries layout changes. -->
                ${entriesContent}

            <!-- Navigate back to the entry form. -->
            <button id="back-to-form" type="button"
                class="text-base font-semibold px-6 py-3 bg-white text-[#222222] rounded-full shadow mt-4 mb-8 absolute -bottom-7 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                Add Another Entry
            </button>
        </section>
    `;
}

// Call this after the screen HTML has been inserted into the DOM. 
export function initializeJournalEntriesScreen() { 
    const isMobile = window.innerWidth < 500; 
    if (!isMobile) { 
        initializeDesktopEntries(getEntries()); 
    } 
}