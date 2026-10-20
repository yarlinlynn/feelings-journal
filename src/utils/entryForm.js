
import { saveEntry } from "./entries.js";

/*
export function initEntryForm(entrySaved) {
    const form = document.querySelector("#entryForm");
    const savedText = document.querySelector("#dailyThoughts");
    const buttons = document.querySelectorAll(".emotion-btn"); 
    const titleInput = form.querySelector("#entryTitle");

    // Get the validation message elements from the form.
    const emotionError = form.querySelector("#emotionError");
    const thoughtsError = form.querySelector("#thoughtsError");
    const titleError = form.querySelector("#titleError");

    if(!form) return;

    // Restore previously typed thoughts from this tab's session.
    savedText.value = sessionStorage.getItem("dailyThoughts") || "";
    titleInput.value = sessionStorage.getItem("entryTitle") || "";

    // Save draft text whenever the user types.
    savedText.addEventListener("input", () => {
        sessionStorage.setItem("dailyThoughts", savedText.value);

        // Hide the thoughts error as soon as the user enters text.
        if (savedText.value.trim()) {
            thoughtsError.hidden = true;
        }
    });

    // Save the title draft whenever the user types.
    titleInput.addEventListener("input", () => {
        sessionStorage.setItem("entryTitle", titleInput.value);

        if (titleInput.value.trim()) {
            titleError.hidden = true;
        }
    });

    // Restore the previously selected emotion.
    const savedSelectedButton = sessionStorage.getItem("savedSelectedButton");
    buttons.forEach((button) => {
        const isSelected = button.getAttribute("aria-label") === savedSelectedButton;
        button.classList.toggle("selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));

        // Hide the emotion error when an emotion is selected.
        button.addEventListener("click", () => {
            if (form.querySelector(".emotion-btn.selected")) {
                emotionError.hidden = true;
            }
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const selectedButton = form.querySelector(".emotion-btn.selected");
        const emotion = selectedButton?.getAttribute("aria-label");
        const thoughts = savedText.value.trim();
        const title = titleInput.value.trim();
        const emotionImage = selectedButton?.querySelector("img")?.getAttribute("src");

        // Show or hide validation messages based on current values.
        emotionError.hidden = Boolean(emotion);
        thoughtsError.hidden = Boolean(thoughts);
        thoughtsError.hidden = Boolean(thoughts);

        // Stop submission if no emotion has been selected.
        if (!emotion) {
            form.querySelector(".emotion-btn")?.focus();
            return;
        }

        // Stop submission if the textarea is empty.
        if (!thoughts) {
            savedText.focus();
            return;
        }

        if (!title) {
            titleInput.focus();
            return;
        }

        try {
            // Save the entry to localStorage.
            saveEntry({
                title,
                emotion,
                color: selectedButton.dataset.color,
                thoughts,
                emotionImage
            });

            // Clear the unfinished form state after saving.
            sessionStorage.removeItem("entryTitle");
            sessionStorage.removeItem("dailyThoughts");
            sessionStorage.removeItem("savedSelectedButton");

            form.reset();

            // Clear the selected emotion styling.
            buttons.forEach((button) => {
                button.classList.remove("selected");
                button.setAttribute("aria-pressed", "false");
            });

            // Hide validation messages after a successful save.
            emotionError.hidden = true;
            titleError.hidden = true;
            thoughtsError.hidden = true;

            // Navigate to the entries screen after saving.
            if (typeof entrySaved === "function") {
                entrySaved();
            }

        } catch(error) {
            console.error("Failed to save journal entry:", error);
            alert("Unable to save your entry. Please try again.");
        }
    })
}
*/


export function initEntryForm(entrySaved) {
    // Find the form in the DOM and stop initialization if it is not present.
    const form = document.querySelector("#entryForm");
    if (!form) return;

    // Find the form controls needed for input handling and validation.
    const savedText = form.querySelector("#dailyThoughts");
    const titleInput = form.querySelector("#entryTitle");
    const buttons = form.querySelectorAll(".emotion-btn");
    const emotionLegend = form.querySelector("#emotionLegend");

    // Store the original legend text and styling.
    const originalLegendText = "Select emotion button";
    const originalLegendClasses = "text-[2rem] mt-0 mx-auto mb-6 text-white";

    // Define the styling used to display an emotion validation error.
    const errorLegendClasses ="validation-error text-[2rem] mt-0 mx-auto mb-6 text-red-700";

    // Restore the original emotion legend after an emotion is selected.
    function resetEmotionLegend() {
        emotionLegend.textContent = originalLegendText;
        emotionLegend.className = originalLegendClasses;
    }

    // Display an error message when no emotion has been selected.
    function showEmotionError() {
        emotionLegend.textContent = "Please select an emotion.";
        emotionLegend.className = errorLegendClasses;
    }

    // Restore previously typed drafts from the current browser session.
    savedText.value = sessionStorage.getItem("dailyThoughts") || "";
    titleInput.value = sessionStorage.getItem("entryTitle") || "";

    // Save the thoughts draft and remove its error styling when corrected.
    savedText.addEventListener("input", () => {
        sessionStorage.setItem("dailyThoughts", savedText.value);
    });

    // Save the title draft and remove its error styling when corrected.
    titleInput.addEventListener("input", () => {
        sessionStorage.setItem("entryTitle", titleInput.value);
    });

    // Restore the previously selected emotion, if one was saved.
    const savedSelectedButton = sessionStorage.getItem("savedSelectedButton");

    buttons.forEach((button) => {
        const isSelected = button.getAttribute("aria-label") === savedSelectedButton;

        // Restore the selected styling and accessible pressed state.
        button.classList.toggle("selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));

        // Clear the emotion validation message when an emotion is clicked.
        button.addEventListener("click", () => {
            resetEmotionLegend();
        });
    });

    // Handle form submission and validate the entry before saving.
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Retrieve the selected emotion and its associated image.
        const selectedButton =
            form.querySelector(".emotion-btn.selected");

        const emotion = selectedButton?.getAttribute("aria-label");

        const emotionImage = selectedButton ?.querySelector("img")?.getAttribute("src");

        // // Trim whitespace so fields containing only spaces are treated as empty.
        // const title = titleInput.value.trim();
        // const thoughts = savedText.value.trim();
        // Keep the original values so the user's formatting is preserved.
        const title = titleInput.value;
        const thoughts = savedText.value;

        // Require an emotion selection before allowing the entry to be saved.
        if (!emotion) {
            showEmotionError();
            form.querySelector(".emotion-btn")?.focus();
            return;
        }

        // Require a non-empty title and focus the field if it is missing.
        if (!title.trim()) {
            // titleInput.classList.add("validation-error");
            // titleInput.classList.add(
            //     "border-2",
            //     "border-solid",
            //     "border-red-600"
            // );
            titleInput.focus();
            return;
        }

        // Require journal thoughts and focus the textarea if it is empty.
        if (!thoughts.trim()) {
            // savedText.classList.add("validation-error");
            // savedText.classList.add(
            //     "border-2",
            //     "border-solid",
            //     "border-red-600"
            // );
            savedText.focus();
            return;
        }

        try {
            // Save the journal entry with its title, emotion, color, thoughts and image.
            saveEntry({
                title,
                emotion,
                color: selectedButton.dataset.color,
                thoughts,
                emotionImage
            });

            // Clear saved drafts after the entry has been saved successfully.
            sessionStorage.removeItem("entryTitle");
            sessionStorage.removeItem("dailyThoughts");
            sessionStorage.removeItem("savedSelectedButton");

            // Reset the form
            form.reset();

            // Clear the selected emotion styling and accessible pressed state.
            buttons.forEach((button) => {
                button.classList.remove("selected");
                button.setAttribute("aria-pressed", "false");
            });

            // Restore the original emotion legend.
            resetEmotionLegend();

            // Notify the calling code so it can navigate to the entries screen.
            if (typeof entrySaved === "function") {
                entrySaved();
            }
        } catch (error) {
            // Log the error for debugging and notify the user if saving fails.
            console.error("Failed to save journal entry:", error);
            alert("Unable to save your entry. Please try again.");
        }
    });
}



