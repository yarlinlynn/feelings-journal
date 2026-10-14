
import { emotionButtons } from "./emotionBtnContainer";

/**
 * Generates the journal entry form.
 * Users select an emotion and describe what made them feel that way.
 * Validation messages are hidden until JavaScript determines that a required field is missing.
 */
export function journalEntryForm() {
    return `
        <form id="entryForm">
            <fieldset>
                <legend class="text-4xl mt-0 mx-auto mb-8 text-white">How I felt today?</legend>

                <!-- Provides additional instructions for screen readers. -->
                <legend class="sr-only"> Select from the below emotions how you felt today</legend>
            
                <div class="flex flex-wrap justify-center gap-4">
                    ${emotionButtons()}
                </div>

                <!-- Validation message to ensure button is selected before submittion -->
                <p
                    id="emotionError"
                    class="validation-error text-red-700 mt-3 text-2xl"
                    role="alert"
                    hidden
                >
                    Please select an emotion.
                </p>
                                
            </fieldset>

            <fieldset class="mt-8 md:mt-20">
                <label for="dailyThoughts" class="mb-4 text-3xl text-justify">What made me feel that way ?</label>
                        
                <textarea name="dailyThoughts" id="dailyThoughts" rows="8" cols="48" aria-describedby="dailyThoughtsHint">
                </textarea>

                <!-- Additional instructions for screen reader users. -->
                <p id="dailyThoughtsHint" class="sr-only">
                    Write about what influenced your feelings today.
                </p>

                <!-- Validation message to ensure text is entered before submittion -->
                <p
                    id="thoughtsError"
                    class="validation-error text-red-700 mt-3 text-2xl"
                    role="alert"
                    hidden
                >
                    Please write your thoughts before entry can be saved.
                </p>
            </fieldset>

            <!-- Submits the form, saving the entry and navigating to the entries screen. -->
            <button id="save-entry" type="submit"
                class="text-base font-semibold px-6 py-3 bg-white text-[#222222] border-none rounded-full shadow-[2px_2px_4px_rgba(21,30,8,0.6)] mt-10"
            >
                Save entry
            </button>
        </div>
    `;
}