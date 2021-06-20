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

function loadBandsintown(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            let bandsintown = document.createElement('script');
            bandsintown.setAttribute('src', 'https://widget.bandsintown.com/main.min.js');
            entry.target.append(bandsintown);
        }
    });
}

const bandsintownObserver = new IntersectionObserver(loadBandsintown);
const dates = document.getElementById('dates');
bandsintownObserver.observe(dates);