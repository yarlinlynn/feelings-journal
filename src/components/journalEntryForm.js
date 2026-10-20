
import { emotionButtons } from "./emotionBtnContainer";

/**
 * Generates the journal entry form.
 * Users select an emotion and describe what made them feel that way.
 * Validation messages are hidden until JavaScript determines that a required field is missing.
 */
export function journalEntryForm() {
    return `
        <form id="entryForm" class="flex flex-col gap-6 md:gap-10">
            <fieldset>
                <legend id="emotionLegend" class="text-[2rem] mt-0 mx-auto mb-6 text-white">
                    Select emotion button
                </legend>

                <!-- Provides additional instructions for screen readers. -->
                <p class="sr-only"> Select from the below emotions how you felt today</p>
            
                <div class="flex flex-wrap justify-center gap-4">
                    ${emotionButtons()}
                </div>
                                
            </fieldset>

            <fieldset class="">
                <label for="entryTitle" class="sr-only">
                    Give your entry a title
                </label>

                <input
                    type="text"
                    id="entryTitle"
                    name="entryTitle"
                    placeholder="Give your entry a title..."
                    maxlength="100" 
                    class="w-full p-3 rounded-lg bg-white"
                    aria-describedby="titleError"
                />
            </fieldset>

            <fieldset class="">
                <label for="dailyThoughts" class="sr-only">
                    What made me feel that way?
                </label>

                <textarea
                    name="dailyThoughts"
                    id="dailyThoughts"
                    rows="8" cols="48"
                    maxlength="200"
                    placeholder="Write about what influenced your feelings today..."
                    aria-describedby="dailyThoughtsHint thoughtsError"
                    class="w-full p-3 rounded-lg"
                ></textarea>

                <p id="dailyThoughtsHint" class="sr-only">
                    Write about what influenced your feelings today.
                </p>
            </fieldset>

            <!-- Submits the form, saving the entry and navigating to the entries screen. -->
            <button id="save-entry" type="submit"
                class="text-base font-semibold px-6 py-3 bg-white text-[#222222] border-none rounded-full shadow-[2px_2px_4px_rgba(21,30,8,0.6)]"
            >
                Save entry
            </button>
        </form>
    `;
}