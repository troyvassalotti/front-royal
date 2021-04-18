let prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const listeners = document.getElementById("listeners");
const streams = document.getElementById("streams");
const plays = document.getElementById("plays");
const metrics = [listeners, streams, plays];

function handleAnimatedStats(entries) {
    entries.map((entry) => {
        if (entry.target === listeners && entry.isIntersecting) {
            console.log("COUNT THOSE LISTENERS")
            animateValue(entry.target, 0, 22, 1500);
            statsObserver.unobserve(entry.target);
        } else if (entry.target === streams && entry.isIntersecting) {
            console.log("COUNT THOSE STREAMS");
            animateValue(entry.target, 0, 63, 2500);
            statsObserver.unobserve(entry.target);
        } else if (entry.target === plays && entry.isIntersecting) {
            console.log("COUNT THOSE PLAYS");
            animateValue(entry.target, 0, 8, 500);
            statsObserver.unobserve(entry.target);
        }
    });
}

const statsOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
}

const statsObserver = new IntersectionObserver(handleAnimatedStats, statsOptions);
if (!prefersReducedMotion.matches) {
    metrics.forEach(metric => metric.innerHTML = "0");
    metrics.forEach(metric => statsObserver.observe(metric));
}

class Accordion {
    // The accordian constructor
    constructor(el) {
        this.el = el;
        this.summary = el.querySelector("summary");
        this.content = el.querySelector(".content");
        // Store the animation object (so we can cancel it, if needed)
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.summary.addEventListener("click", (e) => this.onClick(e));
    }

    // Function called when user clicks on the summary
    onClick(e) {
        e.preventDefault();
        // Add an overflow on the <details> to avoid content overflowing
        this.el.style.overflow = "hidden";
        // Check if the element is being closed or is already closed
        if (this.isClosing || !this.el.open) {
            this.open();
            // Check if the element is being openned or is already open
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }

    // Function called to close the content with an animation
    shrink() {
        this.isClosing = true;
        // Store the current height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the height of the summary
        const endHeight = `${this.summary.offsetHeight}px`;
        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }
        // Start a WAAPI animation
        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: "ease-out"
        });

        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = () => this.onAnimationFinish(false);
        // If the animation is cancelled, isClosing variable is set to false
        this.animation.oncancel = () => (this.isClosing = false);
    }

    // Function called to open the element after click
    open() {
        // Apply a fixed height on the element
        this.el.style.height = `${this.el.offsetHeight}px`;
        // Force the [open] attribute on the details element
        this.el.open = true;
        // Wait for the next frame to call the expand function
        window.requestAnimationFrame(() => this.expand());
    }

    // Function called to expand the content with an animation
    expand() {
        // Set the element as "being expanding"
        this.isExpanding = true;
        // Get the current fixed height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the open height of the element (summary height + content height)
        const endHeight = `${
            this.summary.offsetHeight + this.content.offsetHeight
        }px`;

        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }

        // Start a WAAPI animation
        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: "ease-out"
        });
        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = () => this.onAnimationFinish(true);
        // If the animation is cancelled, isExpanding variable is set to false
        this.animation.oncancel = () => (this.isExpanding = false);
    }

    // Callback when the shrink or expand animations are done
    onAnimationFinish(open) {
        // Set the open attribute based on the parameter
        this.el.open = open;
        // Clear the stored animation
        this.animation = null;
        // Reset isClosing & isExpanding
        this.isClosing = false;
        this.isExpanding = false;
        // Remove the overflow hidden and the fixed height
        this.el.style.height = this.el.style.overflow = "";
    }
}

if (!prefersReducedMotion.matches) {
    document.querySelectorAll("details").forEach((el) => {
        new Accordion(el);
    });
}