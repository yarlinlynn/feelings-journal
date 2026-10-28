
// Audio:
import pageTurnSound from "../sounds/turn-page.wav";

export function initPageNavigation( {container, entries, entriesPerPage = 1, renderPage }) {
    if (!container || !entries || entries.length === 0) return;

    // Always show the newest entries on the first "page"
    const sortEntries = [...entries].sort( (a, b) => new Date(a.date) - new Date(b.date) );
    const totalPages = Math.ceil(sortEntries.length / entriesPerPage); 
    let currentPage = totalPages - 1; // Start on the newest entry 

    const audio = new Audio(pageTurnSound);
    audio.volume = 0.35;

    function playPageTurnSound() {
        audio.pause();
        audio.currentTime = 0;

        audio.play().catch((error) => {
            console.warn("Page-turn sound could not play:", error);
        });
    }

    // Update the displayed entries and navigation button states
    function updatePageEntry() {
        container.innerHTML = renderPage(sortEntries, currentPage);
    }

    function changePage(event) {
        const flipPage = event.target.closest("[data-page-direction]");

        if (!flipPage || !container.contains(flipPage)) return;
        const flipPageDirection = flipPage.dataset.pageDirection;

        if (flipPageDirection === "previous" && currentPage > 0) {
            currentPage--;
        } else if (flipPageDirection === "next" && currentPage < totalPages - 1) {
            currentPage++;
        } else {
            return;
        }

        playPageTurnSound();
        updatePageEntry();
    }

    container.addEventListener("click", changePage);
    updatePageEntry();

    // Allow callers to clean up if the screen is reinitialized.
    return () => {
        container.removeEventListener("click", changePage);
        audio.pause();
    };
}