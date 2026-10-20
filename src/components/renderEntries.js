
export function renderEntries(entry) {
    return `
        <article class="p-4" style="background-color: ${entry.color}">
            <div id="${entry.id}" class="flex items-center gap-3">
                ${entry.emotionImage ? `
                    <img src="${entry.emotionImage}"
                        alt="${entry.emotion}"
                        class="w-12 h-12 object-contain"
                    />
                ` : ""}

                <h2 class="text-xl font-semibold text-black">${entry.title || ""}</h2>
            </div>

            <p class="mt-3">${entry.emotion}</p>
            <p class="mt-3">${entry.thoughts}</p>

            <time datetime="${entry.date}" class="block mt-3 text-sm">
                ${new Date(entry.date).toLocaleDateString()}
            </time>

                    
        </article>
    `;
}