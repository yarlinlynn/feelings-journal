
import { emotionButtons } from "../components/emotionBtnContainer.js";

export function EntryFormScreen() {
    return `
        <section id="form-screen" aria-labelledby="entry-form-title" style="background-color: #a89bd1;"
            class="flex flex-col items-center justify-center w-full h-screen p-4 text-center transition-colors duration-[400ms] ease-in-out" 
        >
            <h2 class="text-4xl mt-0 mx-auto mb-8">How I felt today?</h2>

            <form id="entryForm">
               <fieldset>
                    <legend class="sr-only"> Select from the below emotions how you felt today</legend>

                    <div class="flex flex-wrap justify-center gap-4">
                        ${emotionButtons()}
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

 

                
                    
                    
                    
                    
                    
                    


                