
export function changeScreenBackground() {
    const buttons = document.querySelectorAll(".emotion-btn");
    const formScreen = document.querySelector("#form-screen");
    const defaultColor = "#a89bd1"

    buttons.forEach( (btn) => {
        const color = btn.dataset.color;

        btn.addEventListener("mouseenter", () => { 
            formScreen.style.backgroundColor = color;
        }); 

        btn.addEventListener("mouseleave", () => { 
            const selectedButton = document.querySelector(".emotion-btn.selected");
            formScreen.style.backgroundColor = selectedButton?.dataset.color || defaultColor; 
        });

        btn.addEventListener("click", () => { 
            const isSelected = btn.classList.contains("selected");
            if (isSelected) { 
                btn.classList.remove("selected"); // Deselect the button
                btn.setAttribute("aria-pressed", "false"); // Return to default background 
                formScreen.style.backgroundColor = defaultColor; return; 
            }
            buttons.forEach((button) => { 
                button.classList.remove("selected"); 
                button.setAttribute("aria-pressed", "false"); 
            }); 
            
            btn.classList.add("selected"); 
            btn.setAttribute("aria-pressed", "true");
            formScreen.style.backgroundColor = color;
        });
    });
}