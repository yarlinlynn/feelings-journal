
export function renderEntries(entry) {
    return `
        <article id="${entry.id}" class="flex flex-col rounded-lg overflow-hidden min-h-[360px] max-h-[90vh] entry">
            
            <!-- Colored header -->
            <div class="w-full shrink-0 px-4 py-3">

                <h2 class="text-xl text-black font-semibold mt-1 text-end">
                    ${entry.title || ""}
                </h2>

                <div class="flex items-center justify-between gap-3 relative">
                    <span class="text-sm font-medium">Today I felt 
                        <span class="ml-1" style="color: ${entry.color}">${entry.emotion}</span>
                    </span>
                    ${entry.emotionImage ? `
                        <div class="absolute left-[1.5rem] top-[1.5rem] w-12 h-12 flex items-center justify-center">
                            <svg class="absolute inset-0 w-full h-full overflow-visible opacity-50" viewBox="0 0 64 60">
                                <!-- Main cloud -->
                                <path d="M20 38c-8 0-14-6-14-13s6-13 14-13c1.5-6 7-10 13-10 7 0 12.5 4.5 14 11 6 1 11 6 11 12 0 7-6 13-13 13H20z" 
                                    style="fill: ${entry.color}" />

                                <!-- Bubbles on top and lower -->
                                <circle cx="50" cy="0" r="4.5" style="fill: ${entry.color}" opacity="0.95"/>
                                <circle cx="58" cy="-10" r="2.9" style="fill: ${entry.color}" opacity="0.8"/>
                            </svg>

                            <img src="${entry.emotionImage}"
                                alt="${entry.emotion}"
                                class="relative z-10 w-5 h-5 object-contain  -mt-3"
                            />
                        </div>
                    ` : ""}

                    <time datetime="${entry.date}" class="text-sm text-black/80">
                        ${new Date(entry.date).toLocaleDateString()}
                    </time>
                    
                </div>    
                
            </div>
            
            <!-- Scrollable body (useful if the entry is long) -->
            <div class="flex-1 overflow-y-auto overscroll-contain w-full px-4 py-5">
                <p class="whitespace-pre-line break-words">
                    ${entry.thoughts}
                </p>
            </div>
        </article>
    `;
}