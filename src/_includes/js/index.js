function handleAnimatedContent(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            animatedContentObserver.unobserve(entry.target);
        }
    });
}

const animatedContentObserver = new IntersectionObserver(handleAnimatedContent);
const contentToAnimate = document.querySelectorAll(".animated-content");
contentToAnimate.forEach(item => animatedContentObserver.observe(item));