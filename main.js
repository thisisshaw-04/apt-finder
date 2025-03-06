 // Array of images
        // DIRECTIONS: UPDATE THE URLS WITH THE RELATIVE LINKS OF YOUR IMAGES
        const images = [];
        for (let i = 0; i < 6; i++) {
            images.push("flat/flat" + (i + 1) + ".jpg")
        }

        const char = [];
        for (let i = 0; i < 58; i++) {
            char.push("char/char" + (i + 1) + ".png")
        }

        function displayImage() {
            const input2 = document.getElementById("charInput2").value.toUpperCase();
            const input1 = Number(document.getElementById("charInput1"));
            const imgElement = document.getElementById("displayedImage");
            const charElement = document.getElementById("displayedChar");

            // Assign an image based on character (A-Z)
            const index = input2.charCodeAt(0) - 65; // 'A' is 65 in ASCII
            if (index >= 0 && index < images.length) {
                imgElement.src = images[index];
                imgElement.style.display = "block";
            }

            // if (input1 === "1" && input2 ==="A") { //If input1_letter equals A AND input2_letter does not equal B, then show this image
            //     charElement.src = "/char/char1.png"
            //     charElement.style.display = "block";
            // }

            // if (input1 === "1" && input === "A") { //If input1_letter equals A AND input2_letter does not equal B, then show this image
            //     charElement.src = "/char/char1.png"
            //     charElement.style.display = "block";
            // }

            else {
                /* 
                alert("Please enter a letter between A and Z.");
                imgElement.style.display = "none";
                */

                // IF INVALID INPUT IS ENTERED, DISPLAY ALTERNATE IMAGE
                imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmtkdnJhMXY4Njd1cXR3MTM3MW1nMzZ1NXNhNHlhOHA0MWF2dDUzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13dRJkj5wgKq9q/giphy.gif"
                imgElement.style.display = "block";
            }
        }