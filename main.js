// Array of images
const images = [];
for (let i = 0; i < 6; i++) {
    images.push("flat/flat" + (i + 1) + ".jpg");
}

const char = [];
for (let i = 0; i < 70; i++) {
    char.push("char/char" + (i + 1) + ".png");
}

const desc = [""]

function displayImage() {
    const input1 = Number(document.getElementById("charInput1").value);
    const input2 = document.getElementById("charInput2").value.toUpperCase();
    const imgElement = document.querySelector(".item4");
    const charElement = document.querySelector(".item3");

    // Assign an image based on character (A-Z)
    const index = input2.charCodeAt(0) - 65; // 'A' is 65 in ASCII

    // Validate input
    if (index < 0 || index >= 6 || input1 < 1 || input1 > 11) {
        alert("idiot");
        return; // Exit the function if the input is invalid
    }

    // Set flat image based on input2 (A-F)
    imgElement.style.backgroundImage = `url(${images[index]})`;

    // Set character image based on input1 (1-10) and the current index
    const charIndex = index + (input1 - 1) * 6;
    if ([5, 9, 13, 22, 30, 32, 39, 47, 50, 55, 62].includes(charIndex)) {
        charElement.style.backgroundImage = `url("/char/yay.gif")`;
        charElement.style.backgroundPosition = "center";
        charElement.style.backgroundSize = "cover";
    }
    else {
        charElement.style.backgroundImage = `url(${char[charIndex]})`;
    }
}

// Add event listener to trigger `displayImage` on pressing Enter
document.getElementById("charInput1").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        displayImage(); // Call the displayImage function when Enter is pressed
    }
});

document.getElementById("charInput2").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        displayImage(); // Call the displayImage function when Enter is pressed
    }
});
