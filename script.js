/*
    SOMA & CHINTHANA ❤️
    Relationship Counter + Scroll Reveal
*/

const startDate = new Date("2025-12-24T00:00:00");

function updateCounter() {
    const now = new Date();
    let difference = now - startDate;

    if (difference < 0) difference = 0;

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);


/* ==============================
   PHOTO FLIP
================================ */

const cards = document.querySelectorAll(".photo-card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});


/* ==============================
   CLICK HEART
================================ */

document.addEventListener("click", (event) => {

    if (event.target.closest(".photo-card")) return;

    const heart = document.createElement("span");

    heart.textContent = "♥";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.fontSize = "20px";
    heart.style.color = "#e05278";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translate(-50%, -50%) scale(0.5)",
                opacity: 0
            },
            {
                transform: "translate(-50%, -100%) scale(1)",
                opacity: 1
            },
            {
                transform: "translate(-50%, -180%) scale(0.8)",
                opacity: 0
            }
        ],
        {
            duration: 900,
            easing: "ease-out"
        }
    );

    setTimeout(() => heart.remove(), 900);
});


/* ==============================
   SCROLL REVEAL ✨
================================ */

const revealElements = document.querySelectorAll(
    ".hero, .counter-section, .timeline-section, .gallery-section, .timeline-card, .photo-card, section"
);

revealElements.forEach((element) => {
    element.classList.add("scroll-reveal");
});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


document.querySelectorAll(".scroll-reveal").forEach((element) => {
    revealObserver.observe(element);
});

/* ==============================
   HIDDEN SURPRISE 💌
================================ */

const surpriseButton = document.getElementById("surpriseButton");
const surpriseCard = document.getElementById("surpriseCard");

if (surpriseButton && surpriseCard) {

    surpriseButton.addEventListener("click", () => {

        surpriseCard.classList.toggle("show");

        if (surpriseCard.classList.contains("show")) {
            surpriseButton.textContent = "💖 Close Surprise";
        } else {
            surpriseButton.textContent = "💌 Open Your Surprise";
        }

    });

}

/* ==============================
   CINEMATIC OPENING 🎬
================================ */

const openingScreen = document.getElementById("openingScreen");
const enterButton = document.getElementById("enterButton");

if (openingScreen && enterButton) {

    enterButton.addEventListener("click", () => {

        openingScreen.classList.add("hidden");

        setTimeout(() => {
            openingScreen.style.display = "none";
        }, 1000);

    });

}
