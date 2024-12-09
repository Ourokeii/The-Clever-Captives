function toggleSafePopup() {
    const popup = document.getElementById("popupSafe");
    const blur = document.getElementById("blurSafe");
    const questionImage = document.getElementById("text"); // smallquestion.png
    const backButton = document.getElementById("backButton"); // Back button
    const bookQuestionImage = document.getElementById("question"); // bookquestion.png

    if (popup.classList.contains("active")) {
        popup.classList.remove("active");
        blur.classList.remove("active");

        // Change the background image when closing the popup
        document.body.style.backgroundImage = "url('magnifybook.png')";

        // Hide the smallquestion.png image
        questionImage.style.display = "none";

        // Make the "Back" button visible
        backButton.style.visibility = "visible";

        // Make the bookquestion.png image visible
        bookQuestionImage.style.display = "block";

        setTimeout(() => {
            popup.style.visibility = "hidden";
        }, 500);
    } else {
        popup.style.visibility = "visible";
        popup.classList.add("active");
        blur.classList.add("active");

        // Show the smallquestion.png image again when opening the popup
        questionImage.style.display = "block";

        // Hide the "Back" button and bookquestion.png image when opening the popup
        backButton.style.visibility = "hidden";
        bookQuestionImage.style.display = "none";
    }
}

function toggleQuestionPopup() {
    const popup = document.getElementById("popupQuestion");
    const blur = document.getElementById("blurQuestion");

    if (popup.classList.contains("active")) {
        popup.classList.remove("active");
        blur.classList.remove("active");

        setTimeout(() => {
            popup.style.visibility = "hidden";
        }, 500);
    } else {
        popup.style.visibility = "visible";
        popup.classList.add("active");
        blur.classList.add("active");
    }
}

function checkQuestionCode() {
    const correctNoteCode = "Logic"; 
    const answerNote = document.getElementById("noteText").value;

    if (answerNote === correctNoteCode) {
        document.getElementById("questionTitle").innerText = "The Answer is correct!";
        document.getElementById("noteResult").innerText = "The first part of the code is: 1042";
    } else {
        document.getElementById("noteResult").innerText = "Incorrect";
    }
}
