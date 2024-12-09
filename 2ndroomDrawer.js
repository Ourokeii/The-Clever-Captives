// Select the elements
const popupSafe = document.getElementById("popupSafe");
const blurSafe = document.getElementById("blurSafe");
const glassImage = document.getElementById("glass");
const backButton = document.querySelector(".btn a");

// Function to toggle the popup and handle updates
function toggleSafePopup() {
    // Check if the popup is currently active
    const isActive = popupSafe.classList.contains("active");

    if (isActive) {
        // If the popup is being closed, update the image and the back button link
        glassImage.src = "noglass.png"; // Replace with your new image path
        backButton.href = "http://127.0.0.1:5500/2ndroomTwopt2.html"; // Replace with the new link
    }

    // Toggle popup visibility
    popupSafe.classList.toggle("active");
    blurSafe.classList.toggle("active");
}
