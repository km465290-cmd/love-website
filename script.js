
/*
    SOMA & CHINTHANA ❤️
    Relationship Counter
*/


/* ================================
   RELATIONSHIP START DATE
================================ */

const startDate = new Date("2025-12-24T00:00:00");


function updateCounter() {

    const now = new Date();

    let difference = now - startDate;

    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

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


/* ================================
   PHOTO CARD FLIP
================================ */

const cards = document.querySelectorAll(".photo-card");


cards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});


/* ================================
   HEART CLICK EFFECT
================================ */

document.addEventListener("click", (event) => {

    if (event.target.closest(".photo-card")) {
        return;
    }

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


    setTimeout(() => {
        heart.remove();
    }, 900);

});
