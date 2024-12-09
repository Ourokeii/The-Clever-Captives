function togglePaintingPopup() {
    const popup = document.getElementById("popupPainting");
    const blur = document.getElementById("blurPainting");

    if (popup.classList.contains("active")) {
        // Start close animation
        popup.classList.remove("active");
        blur.classList.remove("active");

        // Wait for animation to finish before hiding
        setTimeout(() => {
            popup.style.visibility = "hidden";
        }, 500); // Match the CSS transition duration
    } else {
        // Show and apply animation
        popup.style.visibility = "visible";
        popup.classList.add("active");
        blur.classList.add("active");
    }
}

function checkPaintingCode() {
    const correctAnswer = 10; // The answer to 2x5
    const answer = Number(document.getElementById("PaintingText").value);

    if (answer === correctAnswer) {
        document.getElementById("PaintingTitle").innerText = "Correct!";
        document.getElementById("PaintingResult").innerText = "The passcode is correct.";
    } else {
        document.getElementById("PaintingTitle").innerText = "Try again!";
        document.getElementById("PaintingResult").innerText = "Incorrect answer.";
    }
}