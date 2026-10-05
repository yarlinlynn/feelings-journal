
export function initTypingAnimation() {
    const typingElement = document.querySelector(".animate-text");
    const loadingScreen = document.querySelector("#loading-screen");
    if(!typingElement || !loadingScreen) {
        return;
        console.log("Element not found");
    }

    const words = ["Inspired", "Dejected", "Frustrated", "Satisfied"];
    const colors = ["#ffb3c8", "#a4b4d4", "#e88015", "#acc794"];

    new Typed(typingElement, {
        strings: words,
        typeSpeed: 150,
        backSpeed: 90,
        backDelay: 1000,

        loop: true,

        // We are using our own cursor
        showCursor: false,

        preStringTyped: function (pos) {
            const color = colors[pos % colors.length];

            loadingScreen.style.backgroundColor = color;
        }
    });

    // Initial colour
    loadingScreen.style.backgroundColor = colors[0];
}