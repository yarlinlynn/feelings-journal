
import { saveEntry } from "./entries.js";

// export function initEntryForm() {
//     const savedText = document.querySelector("#dailyThoughts");
//     const buttons = document.querySelectorAll(".emotion-btn");

//     // Restore and save textarea value
//     if(savedText) {
//         savedText.value = sessionStorage.getItem("dailyThoughts") || "";
//         savedText.addEventListener("input", () => {
//             sessionStorage.setItem("dailyThoughts", savedText.value);
//         });

//         // Restore selected emotion button
//         const savedSelectedButton = sessionStorage.getItem("savedSelectedButton");
//         buttons.forEach( (button) => {
//             const isSelected = button.getAttribute("aria-label") === savedSelectedButton;
//             button.classList.toggle("selected", isSelected);
//             button.setAttribute("aria-pressed", String(isSelected));
//         });

//         // Restore background color
//         const selectedButton = document.querySelector(".emotion-btn.selected");
//         const formScreen = document.querySelector("#form-screen");
//         if(formScreen) {
//             formScreen.style.backgroundColor = selectedButton?.dataset.color || "#a89bd1";
//         }

//     }
// }

export function initEntryForm(entrySaved) {
    const form = document.querySelector("#entryForm");
    const savedText = document.querySelector("#dailyThoughts");
    const buttons = document.querySelectorAll(".emotion-btn"); 

    // Get the validation message elements from the form.
    const emotionError = form.querySelector("#emotionError");
    const thoughtsError = form.querySelector("#thoughtsError");

    if(!form) return;

    // Restore previously typed thoughts from this tab's session.
    savedText.value = sessionStorage.getItem("dailyThoughts") || "";
    // Save draft text whenever the user types.
    savedText.addEventListener("input", () => {
        sessionStorage.setItem("dailyThoughts", savedText.value);

        // Hide the thoughts error as soon as the user enters text.
        if (savedText.value.trim()) {
            thoughtsError.hidden = true;
        }
    });

    // Restore the previously selected emotion.
    const savedSelectedButton = sessionStorage.getItem("savedSelectedButton");
    buttons.forEach( (button) => {
        const isSelected = button.getAttribute("aria-label") === savedSelectedButton;
        button.classList.toggle("selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));

        // Hide the emotion error when the user selects an emotion.
        button.addEventListener("click", () => {
            const selectedButton = form.querySelector(".emotion-btn.selected");
            if (selectedButton) {
                emotionError.hidden = true;
            }
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const selectedButton = form.querySelector(".emotion-btn.selected" );
        const emotion = selectedButton?.getAttribute("aria-label");
        const thoughts = savedText.value.trim();

        // Show or hide validation messages based on current values.
        emotionError.hidden = Boolean(emotion);
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

        try {
            // Save the entry to localStorage.
            saveEntry({
                emotion,
                color: selectedButton.dataset.color,
                thoughts,
            });

            // Clear the unfinished form state after saving.
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