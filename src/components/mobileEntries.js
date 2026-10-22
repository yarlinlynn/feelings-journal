import { renderEntries } from "./renderEntries.js";

import { initPageNavigation } from "../utils/journalPageNavigation.js";

import pageTurnSound from "../sounds/turn-page.wav";

const journalBackground = "https://framerusercontent.com/images/sUSpuETVmlGNlF7FTDGlVS5HFpI.png?width=1888&height=971";

function renderSingleEntryPerPage(entries, pageIndex) {
    const entry = entries[pageIndex];
    if (!entry) return "";

    return `
        <div>
        
            <!-- Previous page button: left side -->
            <button type="button" aria-label="Previous journal page"
                data-page-direction="previous"
                class="absolute inset-y-0 left-0 z-10 w-1/2 cursor-pointer bg-transparent"
            ></button>

            <!-- Single entry -->
            <div class="min-w-0">
                ${renderEntries(entry)}
            </div>

            <!-- Next page button: right side -->
            <button type="button" aria-label="Next journal page"
                data-page-direction="next"
                class="absolute inset-y-0 right-0 z-10 w-1/2 cursor-pointer bg-transparent"
            ></button>
        
        </div>
    `;
}

export function mobileEntries(entries) {
    if(entries === 0) {
        return `<p>No entries saved yet.</p>`;
    }

    return `
        <section id="mobileEntries" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  mx-auto">
            <div id="mobileEntryPages" class="w-full max-w-6xl"
                style="background-image: url('${journalBackground}'); background-size: 890px 100%; min-height: 450px; background-repeat: no-repeat; background-position: -375px;"
            ></div>
        </section>
    `
}

export function initializeMobileEntries(entries) {
    return initPageNavigation( {
        container: document.querySelector("#mobileEntryPages"),
        entries,
        entriesPerPage: 1,
        renderPage: renderSingleEntryPerPage,
        pageTurnSound,
    })
}
