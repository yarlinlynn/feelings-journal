//import { renderEntries } from "./renderEntries.js";

import { initPageNavigation } from "../utils/journalPageNavigation.js";

import pageTurnSound from "../sounds/turn-page.wav";

function renderSingleEntryPerPage(entries, pageIndex) {
    const entry = entries[pageIndex];
    if (!entry) return "";

    return `

        <!-- Previous page button: left side -->
        <button type="button" aria-label="Previous journal page"
            data-page-direction="previous"
            class="absolute inset-y-0 left-0 z-10 w-1/2 cursor-pointer bg-transparent"
        ></button>

        <!-- Single entry -->
        <div class="w-80 absolute bg-[#fffaf0] h-[80vh] md:h-[50vh]">
            <article id="${entry.id}" class="flex flex-col items-center justify-evenly h-full">
                <div style="style="background-color: ${entry.color}">
                    <img src="${entry.emotionImage}"
                        alt="${entry.emotion}"
                        class="w-12 h-12 object-contain"
                        style="style="background-color: ${entry.color}""
                    />
                    <time datetime="${entry.date}">${new Date(entry.date).toLocaleDateString()}</time>
                    <h2 class="text-xl text-black font-semibold">${entry.title || ""}</h2>
                </div>
                
                <p class="whitespace-pre-wrap break-words">${entry.thoughts}</p>
            </article>
        </div>

        <!-- Next page button: right side -->
        <button type="button" aria-label="Next journal page"
            data-page-direction="next"
            class="absolute inset-y-0 right-0 z-10 w-1/2 cursor-pointer bg-transparent"
        ></button>
    `;
}

export function mobileEntries(entries) {
    if(entries === 0) {
        return `<p>No entries saved yet.</p>`;
    }

    return `
        <section id="mobileEntries" 
            class="flex items-center justify-center h-full"
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
