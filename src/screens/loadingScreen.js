
export function LoadingScreen() {
    return `
        <section id="loading-screen" aria-labelledby="loading-screen"
            class="bg-[#abc793] flex flex-col items-center justify-center w-full h-screen text-4xl"
        >
            <div class="w-full text-center">
                <h1 id="loading-title" class="text standard">
                    Today, I feel
                    <span aria-live="polite" aria-atomic="true" class="text animate-text"></span>
                    <span class="typed-cursor" aria-hidden="true">|</span>
                </h1>
                
            </div>

            <button id="newEntry" type="button"
                class="text-base m-12 font-medium bg-[#fff] text-[#222] px-6 py-3 rounded-[50px] shadow-[2px_2px_4px_rgba(21,30,8,0.6)] cursor-pointer lg:text-xl"
            >
                Add New Entry
            </button>
        </section>
    `;
}
