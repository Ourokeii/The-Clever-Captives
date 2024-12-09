let fridgeClicked = false; // Track if the fridge has been clicked

function handleFridgeClick() {
    const fridgeLink = document.getElementById("fridgeLink");
    const fridgeImage = document.getElementById("fridge");
    const body = document.body; // Access the body for changing the background

    if (!fridgeClicked) {
        // Change the background image on the first click
        body.style.backgroundImage = "url('2ndRm2UNL.png')"; // New background image
        fridgeImage.src = "topfridge.png"; // Change the fridge image
        fridgeLink.href = "#"; // Temporarily disable navigation
        fridgeClicked = true; // Update the state to clicked
    } else {
        // Redirect to the new link on the second click
        window.location.href = "http://127.0.0.1:5500/InsideFridge.html#";
    }
}

function goBack() {
    window.history.back();
}
