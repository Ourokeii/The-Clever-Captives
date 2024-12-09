function displayOutput() {
    var x = 5;
    
    // Get the value from the input field with id "myText"
    var answer = document.getElementById("myText").value;
    
    // Convert the input to a number
    answer = Number(answer);

    // Check if the answer is equal to x
    if (answer === x) {
        document.getElementById("output").innerText = "You entered: " + x;
    } else {
        document.getElementById("output").innerText = "Incorrect";
    }
}