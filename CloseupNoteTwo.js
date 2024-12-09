let imageChanged = false;

function togglePaintingPopup() {
    const popup1 = document.getElementById("popupPainting1");
    const blur = document.getElementById("blurPainting");

    if (!imageChanged) {
        // Show first popup
        popup1.style.visibility = "visible";
        popup1.classList.add("active");
        blur.classList.add("active");
    } else {
        // Show note popup instead
        toggleNotePopup();
    }
}

function closeFirstPopup() {
    const popup1 = document.getElementById("popupPainting1");
    const blur = document.getElementById("blurPainting");
    const paintingImage = document.getElementById("Painting");

    // Close the first popup
    popup1.classList.remove("active");
    blur.classList.remove("active");

    // Change the image only after the popup is closed
    if (!imageChanged) {
        paintingImage.src = "CloseNoteBack.png"; // Change to the next image
        imageChanged = true; // Ensure this happens only once
    }
}

function toggleNotePopup() {
    const popup = document.getElementById("popupNote");
    const blur = document.getElementById("blurNote");

    // Check if popup is active (closing)
    if (popup.classList.contains("active")) {
        // Redirect after closing
        window.location.href = "http://127.0.0.1:5500/safedoor.html"; // Replace with your desired link
    }

    // Toggle the popup visibility
    popup.classList.toggle("active");
    blur.classList.toggle("active");
}

function checkNoteCode() {
    const answerInput = document.getElementById("noteText").value.trim();
    const resultDiv = document.getElementById("noteResult");

    // Define the correct answer
    const correctAnswer = "405";

    if (answerInput.toLowerCase() === correctAnswer.toLowerCase()) {
        resultDiv.textContent = "The second part of the passcode is 420b";
    } else {
        // Show error message
        resultDiv.textContent = "Incorrect answer. Please try again.";
        resultDiv.style.color = "red";
    }
}
