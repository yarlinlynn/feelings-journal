
export function EntryFormScreen() {
    return `
        <section aria-labelledby="entry-form-title"
            class="bg-[#a89bd1] flex flex-col items-center justify-center w-full h-screen p-4 text-center" 
        >
            <h2 class="text-4xl mt-0 mx-auto mb-8">How I felt today?</h2>

            <form id="entryForm">
               <fieldset>
                    <legend class="sr-only"> Select from the below emotions how you felt today</legend>

                    <div class="flex flex-wrap justify-center gap-4">
                        <button type="button" class="emotion-btn" aria-label="Satisfied" aria-pressed="false">
                            <img src="./images/satisfied.png" alt="Satisfied" loading="lazy" />
                            <p aria-hidden="true">Satisfied</p>
                        </button>

                        <button type="button" class="emotion-btn" aria-label="Inspired" aria-pressed="false">
                            <img src="./images/inspired.png" alt="Inspired" loading="lazy" />
                            <p aria-hidden="true">Inspired</p>
                        </button>

                        <button type="button" class="emotion-btn" aria-label="Confident" aria-pressed="false">
                            <img src="./images/confident.png" alt="Confident" loading="lazy" />
                            <p aria-hidden="true">Confident</p>
                        </button>

                        <button type="button" class="emotion-btn" aria-label="Optimistic" aria-pressed="false">
                            <img src="./images/optimistic.png" alt="Optimistic" loading="lazy" />
                            <p aria-hidden="true">Optimistic</p>
                        </button>

                        <button type="button" class="emotion-btn" aria-label="Anxious" aria-pressed="false">
                            <img src="./images/anxious.png" alt="Anxious" loading="lazy" />
                            <p aria-hidden="true">Anxious</p>
                        </button>

                        <button type="button" class="emotion-btn" aria-label="Frustrated" aria-pressed="false">
                            <img src="./images/frustrated.png" alt="Frustrated" loading="lazy" />
                            <p aria-hidden="true">Frustrated</p>
                        </button>

                        <button type="button" class="emotion-btn" aria-label="Intimidated" aria-pressed="false">
                            <img src="./images/intimidated.png" alt="Intimidated" loading="lazy" />
                            <p aria-hidden="true">Intimidated</p>
                        </button>

                        <button type="button" class="emotion-btn" aria-label="Dejected" aria-pressed="false">
                            <img src="./images/dejected.png" alt="Dejected" loading="lazy" />
                            <p aria-hidden="true">Dejected</p>
                        </button>
                    </div>
                </fieldset>

                <div class="mt-20 lg:grid lg:grid-cols-2 lg:gap-4 lg:px-12">
                    <div class="mt-8">
                        <label for="dailyThoughts" class="mb-4 text-3xl text-justify">What made me feel that way ?</label>
                        
                        <textarea name="dailyThoughts" id="dailyThoughts" rows="4" cols="48" aria-describedby="dailyThoughtsHint"></textarea>

                        <p id="dailyThoughtsHint" class="sr-only"> Write about what influenced your feelings today. </p>
                    </div>
                    <div class="mt-8">
                        <label for="aspirations" class="mb-4 text-3xl text-justify">My aspirations for tomorrow ?</label>

                        <textarea name="aspirations" id="aspirations" rows="4" cols="48" aria-describedby="aspirationsHint"></textarea>

                        <p id="aspirationsHint" class="sr-only"> Write about what you hope to accomplish or experience tomorrow. </p>
                    </div>
                </div>

                <button id="save-entry" type="submit"
                    class="text-base font-semibold px-6 py-3 bg-white text-[#222222] border-none rounded-full shadow-[2px_2px_4px_rgba(21,30,8,0.6)] mt-10"
                >
                    Save entry
                </button>
            </form>
        </section>
    `;
}

 

                
                    
                    
                    
                    
                    
                    


                