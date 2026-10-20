
export function renderEntries(entry) {
    return `
        <article class="p-4 text-black">
            <div id="${entry.id}" class="class="flex items-center gap-3"">

                <time datetime="${entry.date}" class="block text-right -mt-8 mr-8 text-sm">
                    ${new Date(entry.date).toLocaleDateString()}
                </time>

                <div class="flex gap-1 items-center mb-12">
                    <p>Feeling: 
                        <span>${entry.emotion}</span>
                        ${entry.emotionImage ? `
                        <img src="${entry.emotionImage}"
                            alt="${entry.emotion}"
                            class="w-12 h-12 object-contain"
                            style="style="background-color: ${entry.color}""
                        />
                    ` : ""}
                    </p>
                    
                <p class="mt-6 font-medium"></p>
                </div>

                <h2 class="text-xl text-black font-semibold">${entry.title || ""}</h2>
            </div>
            
            <p class="mt-3 whitespace-pre-wrap break-words w-80">${entry.thoughts}</p>
    
        </article>
    `;
}