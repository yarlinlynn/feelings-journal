// IMPORT TAILWIND CSS:
import "./style.css";

// IMPORT COMPONENETS:

// IMPORT FUNCTIONALITY:

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");
    app.innerHTML = `
        <section class="bg-[#abc793] flex items-center justify-center w-full h-screen text-4xl">
            <h1>Today I feel ... |</h1>
        </section>
    `;
});