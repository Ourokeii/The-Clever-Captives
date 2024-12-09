const button = document.getElementById('playButton');
const buttonAudio = document.getElementById('buttonSound');
const bgMusic = document.getElementById('bgMusic');
const volumeControl = document.getElementById('bgMusicVolume');
const settingsButton = document.getElementById('settingsButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Flag to track if music has started
let isMusicStarted = false;

// Start background music after user interaction
const startMusic = () => {
    if (!isMusicStarted) {
        bgMusic.play()
            .then(() => {
                isMusicStarted = true;
                console.log("Background music started.");
            })
            .catch((error) => {
                console.log("Error starting music:", error);
            });
    }
};

// Add event listener for user interaction to trigger music
document.body.addEventListener('click', startMusic, { once: true });

// Play button click sound and delay navigation
button.addEventListener('click', (event) => {
    event.preventDefault();

    // Play the click sound
    buttonAudio.play();

    // Navigate to the next page after the sound ends
    buttonAudio.addEventListener('ended', () => {
        window.location.href = "http://127.0.0.1:5500/game1.html";
    });
});

// Adjust background music volume using the slider
volumeControl.addEventListener('input', (event) => {
    bgMusic.volume = event.target.value;
});

// Set initial volume for background music
bgMusic.volume = 0.5;

// Show popup on settings button click
settingsButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Close popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close popup if user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
