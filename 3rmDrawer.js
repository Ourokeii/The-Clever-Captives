function toggleFirstPopup() {
    const popup1 = document.getElementById("popupSafe1");
    const popup2 = document.getElementById("popupSafe2");
    const blur = document.getElementById("blursafe");
    const codeImage = document.getElementById("code");

    if (popup1.classList.contains("active")) {
       
        popup1.classList.remove("active");
        blur.classList.remove("active");

        setTimeout(() => {
            popup1.style.visibility = "hidden";

            codeImage.src = "DrawerGlass.png";
            popup2.classList.remove("hidden");
            popup2.style.visibility = "visible";
            popup2.classList.add("active");
        }, 500);
    } else {
  
        popup1.style.visibility = "visible";
        popup1.classList.add("active");
        blur.classList.add("active");
    }
}

function toggleSecondPopup() {
    const popup2 = document.getElementById("popupSafe2");
    const blur = document.getElementById("blursafe");

    if (popup2.classList.contains("active")) {
        
        popup2.classList.remove("active");
        blur.classList.remove("active");

        setTimeout(() => {
            popup2.style.visibility = "hidden";
            window.location.href = "http://127.0.0.1:5500/3rdRoomRTpt2.html"; 
        }, 500);
    }
}

function goBack() {
    window.history.back();
}
