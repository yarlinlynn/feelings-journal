
export function mobileEntries(entries) {
    if(entries === 0) {
        return `<p>No entries saved yet.</p>`;
    }

    return `
        <div class="flex flex-col gap-4 pl-1 pr-1">
            <p>mobile screen</p>

            ${entries.map( (entry) => `
                <article class="p-4" style="background-color: ${entry.color}">
                    <div class="flex items-center gap-3">
                        ${entry.emotionImage ? `
                            <img
                                src="${entry.emotionImage}"
                                alt=""
                                class="w-12 h-12 object-contain"
                            />
                        ` : ""}

                        <h2 class="text-xl font-semibold text-black">
                            ${entry.title || ""}
                        </h2>
                    </div>

                    <p class="mt-3">
                        ${entry.emotion}
                    </p>

                    <p class="mt-3">
                        ${entry.thoughts}
                    </p>

                    <time datetime="${entry.date}" class="block mt-3 text-sm">
                        ${new Date(entry.date).toLocaleDateString()}
                    </time>

                    
                </article>
            `).join("")}
        </div>
    `
}

// <div class="bg-[url('/images/notebook.png')] bg-no-repeat bg-[-14rem_-8rem] bg-[175%] h-[70vh]">
