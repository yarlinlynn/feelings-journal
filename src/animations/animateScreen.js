
export function animateScreen(app, renderScreen) {
    gsap.to(app, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
            renderScreen();

            gsap.fromTo(
                app,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out"
                }
            )
        }
    })
}