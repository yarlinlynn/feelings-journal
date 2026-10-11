

export function initEntryForm() {
    const savedText = document.querySelector("#dailyThoughts");
    const buttons = document.querySelectorAll(".emotion-btn");

    // Restore and save textarea value
    if(savedText) {
        savedText.value = sessionStorage.getItem("dailyThoughts") || "";
        savedText.addEventListener("input", () => {
            sessionStorage.setItem("dailyThoughts", savedText.value);
        });

        // Restore selected emotion button
        const savedSelectedButton = sessionStorage.getItem("savedSelectedButton");
        buttons.forEach( (button) => {
            const isSelected = button.getAttribute("aria-label") === savedSelectedButton;
            button.classList.toggle("selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
        });

        // Restore background color
        const selectedButton = document.querySelector(".emotion-btn.selected");
        const formScreen = document.querySelector("#form-screen");
        if(formScreen) {
            formScreen.style.backgroundColor = selectedButton?.dataset.color || "#a89bd1";
        }

    }
}