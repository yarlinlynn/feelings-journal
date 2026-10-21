// COMPONENTS:  
import { renderEntries } from "./renderEntries.js";

// SOUND:
import pageTurnSound from "../sounds/turn-page.wav";

// Functionality:
import { initPageNavigation } from "../utils/journalPageNavigation.js";

// IMAGES:
const journalBackground = "https://framerusercontent.com/images/sUSpuETVmlGNlF7FTDGlVS5HFpI.png?width=1888&height=971";

// Render two entries on the current journal background image
function renderTwoEnteriesPerPage(entries, pageIndex) {
    const startIndex = pageIndex * 2;
    const pageEntries = entries.slice(startIndex, startIndex + 2);

    return `
        <div class="grid grid-cols-[repeat(2,minmax(0,500px))] gap-16 p-8 md:p-12 bg-no-repeat overflow-hidden w-full" 
            style="background-image: url('${journalBackground}'); background-size: 100% 100%; min-height: 620px;"
        >
            <!-- Previous page button: left side -->
            <button type="button" aria-label="Previous journal page"
                data-page-direction="previous"
                class="absolute inset-y-0 left-0 z-10 w-1/2 cursor-pointer bg-transparent"
            ></button>

            ${pageEntries.map( (entry, index) => `
                <div class="min-w-0 ${index === 0 ? "ml-16 w-[90%]" : "mr-12 w-[85%]"}">
                    ${renderEntries(entry)}
                </div>
            `).join("")}

            <!-- Next page button: right side -->
            <button type="button" aria-label="Next journal page"
                data-page-direction="next"
                class="absolute inset-y-0 right-0 z-10 w-1/2 cursor-pointer bg-transparent"
            ></button>
        </div>
    `;
}

export function desktopEntries(entries) {
    // Display a message when the journal contains no entries
    if (!entries || entries.length === 0) {
        return `<p>No entries saved yet.</p>`;
    }

    // Sort entries from newest to oldest without modifying the original array
    const sortEntries = [...entries].sort( (a, b) => new Date(a.date) - new Date(b.date) );
    const totalPages = Math.ceil(sortEntries.length / 2);

    return `
        <section id="desktopEntries" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl mx-auto">
            <div id="entryPages">${renderTwoEnteriesPerPage(sortEntries, totalPages - 1)}</div>
        </section>
    `;
}

// Attach navigation behaviour after the desktop markup has been added to the DOM
export function initializeDesktopEntries(entries) {
    return initPageNavigation( {
        container: document.querySelector("#desktopEntries"),
        entries,
        entriesPerPage: 2,
        renderPage: renderTwoEnteriesPerPage,
        pageTurnSound,
    })
}