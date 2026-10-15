
import { getEntries } from "../utils/entries.js";

export function journalEntriesScreen() {
    const entries = getEntries();
    console.log("Entries rendered on journal screen:", entries);

    return `
        <section id="journal-entries" class="min-h-screen p-6">

            <!-- Navigate back to the entry form. -->
            <button id="back-to-form" type="button"
                class="text-base font-semibold px-6 py-3 bg-white text-[#222222] rounded-full shadow mt-4 mb-8"
            >
                ← Write another entry
            </button>

            <h1 class="text-4xl mb-6">
                My Journal Entries
            </h1>
            ${
                entries.length === 0
                    ? "<p>No entries saved yet.</p>"
                    : entries.map((entry) => `
                        <article class="p-5 mb-4" style="background-color: ${entry.color}">
                            <h2 class="text-xl font-semibold text-black">
                                ${entry.emotion}
                            </h2>
                            <img
                                src="${entry.emotionImage}"
                                alt="${entry.emotion}"
                                class="w-16 h-16 object-contain"
                            />
                            <p class="mt-3 whitespace-pre-wrap">${entry.thoughts}</p>
                            <time>${new Date(entry.date).toLocaleDateString()}</time>
                        </article>
                    `).join("")
            }
        </section>
    `;
}