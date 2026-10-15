
import { getEntries } from "../utils/entries.js";

export function journalEntriesScreen() {
    const entries = getEntries();
    console.log("Entries rendered on journal screen:", entries);

    return `
        <section id="journal-entries" class="min-h-screen p-6">
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