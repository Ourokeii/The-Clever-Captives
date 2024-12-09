let imageChanged = false;

function togglePaintingPopup() {
    const popup1 = document.getElementById("popupPainting1");
    const popup2 = document.getElementById("popupPainting2");
    const blur = document.getElementById("blurPainting");
    const paintingImage = document.getElementById("Painting");

    if (!imageChanged) {
        popup1.style.visibility = "visible";
        popup1.classList.add("active");
        blur.classList.add("active");
    } else {

        popup2.style.visibility = "visible";
        popup2.classList.add("active");
        blur.classList.add("active");
    }
}

function closeFirstPopup() {
    const popup1 = document.getElementById("popupPainting1");
    const blur = document.getElementById("blurPainting");
    const paintingImage = document.getElementById("Painting");

    popup1.classList.remove("active");
    blur.classList.remove("active");
    popup1.style.visibility = "hidden";

    paintingImage.src = "crooked.png"; 
    imageChanged = true; 
}

function closeSecondPopup() {
    const popup2 = document.getElementById("popupPainting2");
    const blur = document.getElementById("blurPainting");

    popup2.classList.remove("active");
    blur.classList.remove("active");
    popup2.style.visibility = "hidden";

    window.location.href = "http://127.0.0.1:5500/safedoor.html#";
}
