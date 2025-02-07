// Play Background Music
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicToggle.textContent = "Pause Music ⏸️";
    } else {
        music.pause();
        musicToggle.textContent = "Play Music 🎶";
    }
});

// Function to create falling roses
// Function to create falling roses from the top
function createRose() {
    const rose = document.createElement("img");
    rose.src = "https://img1.picmix.com/output/stamp/normal/7/3/4/1/1651437_cddfe.gif";  // Rose GIF
    rose.classList.add("rose");
    
    // Randomize position (x-axis) and size
    rose.style.left = Math.random() * window.innerWidth + "px";  // Random horizontal position
    rose.style.animationDuration = Math.random() * 5 + 3 + "s";  // Randomize falling speed
    rose.style.width = Math.random() * 30 + 40 + "px";  // Random size for realism

    document.body.appendChild(rose);
    
    // Remove rose after animation duration (8 seconds)
    setTimeout(() => {
        rose.remove();
    }, 8000);
}

// Function to create the rose shower with over 5000 roses in 15 seconds
function showSurprise() {
    const totalRoses = 700; // Number of roses to create
    const duration = 1700; // Duration of the rose shower in milliseconds

    // Create roses at intervals for 15 seconds
    for (let i = 0; i < totalRoses; i++) {
        setTimeout(createRose, (i * duration) / totalRoses);
    }
}

// Event listener to start the rose shower on button click
const roseShowerButton = document.getElementById("roseShowerButton");
roseShowerButton.addEventListener("click", () => {
    showSurprise();
});
