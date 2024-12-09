function toggleQuestionPopup() {
    const popup = document.getElementById("popupQuestion");
    const blur = document.getElementById("blurQuestion");

    if (popup.classList.contains("active")) {
        // Close the popup
        popup.classList.remove("active");
        blur.classList.remove("active");

        setTimeout(() => {
            popup.style.visibility = "hidden"; // Hide the popup
        }, 500); // Delay to allow for transition
    } else {
        // Open the popup
        popup.style.visibility = "visible"; // Ensure visibility is set before adding class
        popup.classList.add("active");
        blur.classList.add("active");
    }
}

function checkQuestionCode() {
    const correctNoteCode = "10420010"; 
    const answerNote = document.getElementById("noteText").value;

    const questionTitle = document.getElementById("questionTitle");
    const noteResult = document.getElementById("noteResult");

    if (answerNote.trim() === "") {
        noteResult.innerText = "Please enter an answer.";
        return; // Prevent further execution if the input is empty
    }

    if (answerNote === correctNoteCode) {
        questionTitle.innerText = "The Answer is correct!";
        noteResult.innerText ="";
        
        // Redirect to a new page after a delay (500ms for transition)
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5500/Epilogue1.html"; // Replace with your new URL
        }, 1000); // Delay redirection by 1 second
    } else {
        questionTitle.innerText = "Incorrect Answer";
        noteResult.innerText = "Try again!";
    }
}
