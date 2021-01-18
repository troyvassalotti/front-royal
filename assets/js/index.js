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

function handleSpinningContent(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("spinner");
      spinningContentObserver.unobserve(entry.target);
    }
  })
}

const spinningContentObserver = new IntersectionObserver(handleSpinningContent);
const contentToSpin = document.querySelectorAll(".spin-me");
contentToSpin.forEach(item => spinningContentObserver.observe(item));