import { renderEntries } from "./renderEntries.js";

import { initPageNavigation } from "../utils/journalPageNavigation.js";

import pageTurnSound from "../sounds/turn-page.wav";

function renderSingleEntryPerPage(entries, pageIndex) {
    const entry = entries[pageIndex];
    if (!entry) return "";

    return `

        <!-- Single entry -->
        <div class="absolute inset-0 flex flex-col">
            ${renderEntries(entry)}
        </div>

        <div class="absolute -bottom-5 left-4 md:left-50 flex items-center gap-2 entry-btn">
            <!-- Previous button (bottom left) -->
            <button type="button" 
                    aria-label="Previous journal page"
                    data-page-direction="previous"
                    class="z-20 rounded-full bg-white/80 shadow-md active:scale-95 transition">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000">
                    <path d="M560-280 360-480l200-200v400Z"/>
                </svg>
            </button>

            <!-- Next button (bottom right) -->
            <button type="button" 
                    aria-label="Next journal page"
                    data-page-direction="next"
                    class="z-20 rounded-full bg-white/80 shadow-md active:scale-95 transition">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000">
                    <path d="M400-280v-400l200 200-200 200Z"/>
                </svg>
            </button>
        <div>

    `;
}

export function mobileEntries(entries) {
    if(!entries || entries.length === 0) {
        return `
            <div
            class="journal-background w-full max-w-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <p class="text-lg text-gray-600 text-center mt-[20%] mr-[3rem]">No entries saved yet.</p>
        </div>
        `;
    }

    return `
        <section id="mobileEntries" 
            class="journal-background w-full max-w-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
        </section>
    `
}

export function initializeMobileEntries(entries) {
    return initPageNavigation( {
        container: document.querySelector("#mobileEntries"),
        entries,
        entriesPerPage: 1,
        renderPage: renderSingleEntryPerPage,
        pageTurnSound,
    })
}
