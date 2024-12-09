
function toggleDoorPopup() {
    const popup = document.getElementById("popupDoor");
    const blur = document.getElementById("blurDoor");
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
function checkDoorCode() {
    const correctCode = "A01420b"; 
    const answer = document.getElementById("doorText").value; 

    if (answer === correctCode) {
        document.getElementById("doorTitle").innerText = "The door is unlocked";
        document.getElementById("doorResult").innerText = "The passcode is correct";

        window.location.href = "http://127.0.0.1:5500/2ndroompt1.html#";
    } else {
        document.getElementById("doorTitle").innerText = "The door is still locked";
        document.getElementById("doorResult").innerText = "Incorrect";
    }
}

function toggleGlobePopup() {
    const popup = document.getElementById("popupGlobe");
    const blur = document.getElementById("blurGlobe");
    
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
    
    function toggleNotePopup() {
        const popup = document.getElementById("popupNote");
        const blur = document.getElementById("blurNote");
        
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
    
    function checkNoteCode() {
        const correctNoteCode = "10"; 
        const answerNote = document.getElementById("noteText").value;
    
        if (answerNote === correctNoteCode) {
            document.getElementById("noteTitle").innerText = "The Answer is correct!";
            document.getElementById("noteResult").innerText = "The second part of the code is: 420b";
        } else {
            document.getElementById("noteResult").innerText = "Incorrect";
        }
    }