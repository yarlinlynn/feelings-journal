import { renderEntries } from "./renderEntries.js";

const journalBackground = "https://framerusercontent.com/images/sUSpuETVmlGNlF7FTDGlVS5HFpI.png?width=1888&height=971";

// Render two entries on the current journal background image
function renderTwoEnteriesPerPage(entries, pageIndex) {
    const startIndex = pageIndex * 2;
    const pageEntries = entries.slice(startIndex, startIndex + 2);

    return `
        <div class="grid grid-cols-[repeat(2,minmax(0,500px))] gap-16 p-8 md:p-12" style="min-height: 620px;">
            ${pageEntries.map( (entry, index) => `
                <div class="min-w-0 ${index === 0 ? "ml-16 w-[90%]" : "mr-12 w-[85%]"}">
                    ${renderEntries(entry)}
                </div>
            `).join("")}
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
        <section id="desktopEntries" class="w-full max-w-6xl mx-auto">

            <!-- Journal background with two entries per page. -->
            <div class="bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5" 
                style="background-image: url('${journalBackground}'); background-size: 100% 100%;"
            >
                <div id="entryPages">${renderTwoEnteriesPerPage(sortEntries, 0)}</div>
            </div>

            <!-- Controls for navigating between journal "pages" -->
            <nav aria-label="Journal page navigation" class="absolute bottom-28 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between w-3/6">
                <button id="previousEntry" type="button"
                    class="" ${totalPages <= 1 ? "disabled" : ""}
                >
                    ← Back
                </button>

                <button id="nextEntry" type="button"
                    class="disabled"
                >
                    Next →
                </button>
            </nav>
        </section>
    `;
}

// Attach navigation behaviour after the desktop markup has been added to the DOM
export function initializeDesktopEntries(entries) {
    const container = document.querySelector("#desktopEntries");
    if (!container || !entries || entries.length === 0) return;

    const entryPages = container.querySelector("#entryPages");
    const previousEntry = container.querySelector("#previousEntry"); 
    const nextEntry = container.querySelector("#nextEntry");

    // Always show the newest entries on the first "page"
    const sortEntries = [...entries].sort( (a, b) => new Date(a.date) - new Date(b.date) );
    const totalPages = Math.ceil(sortEntries.length / 2); 
    let currentPage = totalPages - 1; // Start on the newest entry 

    // Update the displayed entries and navigation button states
    function updatePageEntry() {
        entryPages.innerHTML = renderTwoEnteriesPerPage(sortEntries, currentPage);

        // Flips page to older entries
        previousEntry.disabled = currentPage === 0;
        // previousEntry.disabled = currentPage >= totalPages - 1;

        // Flips page to newer entries
        nextEntry.disabled = currentPage >= totalPages - 1;
        //nextEntry.disabled = currentPage <= 0;
    }

    previousEntry.addEventListener("click", () => { 
        if (currentPage > 0) { 
            currentPage--; 
            updatePageEntry(); 
        } 
    });
    //previousEntry.addEventListener("click", () => { if (currentPage < totalPages - 1) { currentPage++; updatePageEntry(); } });

    nextEntry.addEventListener("click", () => { 
        if (currentPage < totalPages - 1) { 
            currentPage++; 
            updatePageEntry(); 
        } 
    });
    //nextEntry.addEventListener("click", () => { if (currentPage > 0) { currentPage--; updatePageEntry(); } });

    // Set the correct initial button states. 
    updatePageEntry();
}