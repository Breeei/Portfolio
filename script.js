const title = "@the__yuki";
let currentTitle = "";
let index = 0;

function animateTitle() {
    if (index < title.length) {
        currentTitle += title[index];
        document.title = currentTitle;
        index++;
    } else {
        currentTitle = "";
        index = 0;
    }

    setTimeout(function() {
        requestAnimationFrame(animateTitle)
    }, 200);
}

animateTitle();

const username = "Yukii";
let currentUsername = "";
let usernameIndex = 0;

function animateUsername() {
    if (usernameIndex < username.length) {
        currentUsername += username[usernameIndex];
        document.querySelector(".profile-box h1").textContent = currentUsername;
        usernameIndex++;
    } else {
        currentUsername = "";
        usernameIndex = 0;
    }

    setTimeout(function() {
        requestAnimationFrame(animateUsername)
    }, 200);
}

animateUsername();

const clock = document.querySelector(".clock");

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    clock.textContent = `${hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 1000);


document.addEventListener("click", function(e) {
    let clickEffect = document.createElement("div");
    clickEffect.classList.add("click-effect");
    clickEffect.style.left = `${e.clientX}px`;
    clickEffect.style.top = `${e.clientY}px`;
    document.body.appendChild(clickEffect);
    setTimeout(function() {
        clickEffect.remove();
    }, 500);
});
