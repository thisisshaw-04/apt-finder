// Array of images
const images = [];
for (let i = 0; i < 6; i++) {
    images.push("flat/flat" + (i + 1) + ".jpg");
}

const char = [];
for (let i = 0; i < 70; i++) {
    char.push("char/char" + (i + 1) + ".png");
}

const free = [
    "No one lives here... Feel free to make it your own!",
    "This place is empty! Time to add your personal touch!",
    "Looks like no one’s home... What will you do with this space?",
    "This place is up for grabs! Make it your own cozy corner!",
    "Welcome! No one lives here, so you have all the freedom to design it!",
    "It’s all yours! No one’s home to stop your imagination.",
    "This space is waiting for you... What will you create here?",
    "No residents yet! You’ve got the keys to make this place yours!",
    "It’s a blank canvas! Let’s see what you can create here.",
    "This place is wide open... Ready for your unique style!",
    "This space is all yours—time to make it as bold as you are!"
];

const desc = [
    "Amara lives here. She learned to cook the perfect jollof rice at the age of 12 and perfected it by 15.",
    "Mika lives here. She once built a treehouse in the forest and invites friends for weekend escapes.",
    "Isabella lives here. She can dance salsa, but prefers to relax with a cappuccino in the heart of Italy.",
    "Zara lives here. She’s an advocate for sustainable fashion and runs a clothing brand inspired by her roots.",
    "Jade lives here. She loves hiking in the Alps and summited Mont Blanc twice.",
    "Zoe lives here. She’s a mythology enthusiast who wrote an award-winning essay on the Goddesses of Olympus.",
    "Leila lives here. She once spent an entire night in a busy souk and got lost just to explore.",
    "Ibrahim lives here. He’s a chess grandmaster who teaches at a community center every Saturday.",
    "Rafael lives here. He played guitar at a carnival and became an overnight sensation.",
    "Luca lives here. He’s passionate about restoring vintage cars and drives them across the countryside.",
    "Kira lives here. She spends her weekends scuba diving in the Mediterranean and capturing underwater photos.",
    "Olivia lives here. She has a podcast about street art and invites artists for interviews.",
    "Ava lives here. She runs a blog about New York's best hidden cafés and speaks about it on podcasts.",
    "Freya lives here. She loves Nordic mythology and runs a Viking festival every summer.",
    "Lila lives here. She can recite Shakespeare in both French and English, and enjoys spontaneous readings.",
    "Elise lives here. She’s an amateur jazz musician who performs in cafés on weekends.",
    "Nora lives here. She runs a blog about the world’s most enchanting secret spots.",
    "Rosa lives here. She’s a self-proclaimed taco expert and gave a food tour of the best street tacos.",
    "Pia lives here. She can cook the best risotto and once served 500 plates at a family reunion.",
    "Laila lives here. She trekked across mountains and stayed with nomadic families along the way.",
    "Leona lives here. She started a rooftop garden and grows everything from flowers to tomatoes.",
    "Tara lives here. She’s obsessed with ancient temples and spent six months volunteering in Cambodia.",
    "Amina lives here. She’s passionate about preserving folklore and organizes storytelling nights.",
    "Kiana lives here. She’s an avid sailor and crossed the Mediterranean solo just to prove her skills.",
    "Hiro lives here. He’s a photographer who captures the essence of his city through his lens.",
    "Karina lives here. She once took a road trip across a country and stayed with locals along the way.",
    "Iris lives here. She loves working in windmill museums and shares stories about history.",
    "Dina lives here. She’s an Arabic calligraphy artist who teaches in the evenings.",
    "Ingrid lives here. She loves hiking through coastal cliffs and once ran a marathon along them.",
    "Elena lives here. She’s a photographer who captured the beauty of castles for an exhibition.",
    "Ethan lives here. He started a skateboard park and organizes yearly competitions.",
    "Nina lives here. She speaks five languages, but her favorite is the language of laughter.",
    "Lina lives here. She organized a midsummer celebration complete with dancing and flower crown-making.",
    "Hana lives here. She’s known for organizing peaceful yoga retreats in nature.",
    "Liam lives here. He once helped build an eco-friendly house and now promotes sustainable living.",
    "Aya lives here. She loves traditional tea ceremonies and can make the perfect cup from scratch.",
    "Nadia lives here. She runs a community art project that connects artists worldwide.",
    "Mateo lives here. He can make the best barbecue and hosts a massive cookout every summer.",
    "Katerina lives here. She learned how to ski at 5 years old and now teaches the next generation.",
    "Omar lives here. He’s an expert at making shawarma and runs a packed street food stall.",
    "Eva lives here. She’s passionate about folk music and plays the violin in a local cultural ensemble.",
    "Kaito lives here. He won an origami competition and now teaches kids the art of paper folding.",
    "Alexander lives here. He wrote a travel blog about ancient ruins and it became an international sensation.",
    "Amira lives here. She spends weekends teaching kids how to cook traditional dishes.",
    "Javier lives here. He joined a salsa class and ended up performing at a national festival.",
    "Emma lives here. She once spent a summer learning how to bake croissants from a local bakery.",
    "Maya lives here. She’s a yoga teacher who can do a handstand while telling inspirational stories.",
    "Maria lives here. She once performed a flamenco dance on the streets and captivated the crowd.",
    "Clara lives here. She loves traveling and backpacked solo across Brazil, visiting hidden beaches.",
    "Noah lives here. He made a treehouse for his younger brother and now lives in it on weekends.",
    "Sofina lives here. She spent a year volunteering at a local school and learned how to tango along the way.",
    "Miriam lives here. She founded a group that organizes hikes to explore the desert in all its forms.",
    "Yasmin lives here. She’s an expert at negotiating with vendors after spending summers exploring local markets.",
    "Mira lives here. She traveled to a remote village and learned the art of pottery from locals.",
    "Yusuf lives here. He’s a professional chef who teaches cooking classes about traditional dishes.",
    "Dmitri lives here. He hiked to the top of Mount Elbrus during winter and survived a snowstorm.",
    "Sophia lives here. She once traveled to explore ancient ruins and discovered a hidden beach along the way.",
    "Theo lives here. He’s an avid surfer and once attempted to surf the Mediterranean’s biggest wave."
];

const avail = [
    "Vacant and waiting—claim it before a family of raccoons does!",
    "Empty, echoey, and all yours—just add furniture (and maybe a plant)!",
    "Move-in ready! No ghosts, probably.",
    "This unit is up for grabs—bring your dreams and a doormat!",
    "Available! A blank canvas for your questionable interior design choices.",
    "No one’s here… yet. Make it yours before someone weirder does!",
    "Wide open and waiting—just imagine all the bad dance moves you can do in here.",
    "Vacant and vibing—perfect for introverts, extroverts, and everyone in between.",
    "An empty apartment, a world of possibilities—first step: pick a couch.",
    "This space is unclaimed! Be the first to leave a mysterious creaky floorboard behind."
];

const nope = [
    "Taken! Someone got here first—maybe next time!",
    "Occupied! This one’s off the market, but keep searching!",
    "No vacancy! You’ll have to find another cozy corner.",
    "Locked in! Someone’s already making this place their own.",
    "Not available! The door is closed, and so is your chance.",
    "Already claimed! Try your luck somewhere else.",
    "This one’s spoken for—better luck with the next door!",
    "Nope, not this one! Someone’s already settled in.",
    "Taken! Someone else saw the charm before you did.",
    "Occupied! The lights are on, and so is the ‘no vacancy’ sign.",
    "This space is full—time to keep exploring!",
    "No luck here! This one’s already off the list.",
    "Already home to someone—guess you’ll have to be neighbors instead!",
    "No room here! But don’t worry, there are plenty more doors to knock on.",
    "Not this one! The key belongs to someone else now.",
    "Already lived in—unless you’re a ghost, you’ll need a new option!",
    "Claimed! You’ll have to find a different future address.",
    "This spot’s taken, but the search isn’t over yet!",
    "No vacancies! The welcome mat is already in use.",
    "Too slow! Someone’s already unpacked here.",
    "Taken! The door won’t be opening for you today.",
    "This one’s not for grabs—onward to the next!",
    "Already occupied! Maybe check the unit down the hall?",
    "This apartment has a resident—time to check another!",
    "No space here, but who knows what the next unit holds?"
];

const cat = ["https://c.tenor.com/zN5C2mTeYWoAAAAC/tenor.gif","https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWo3aWN3dHlyd2s5dHp1Znd2aTV1dWl2b3Q5eGxhcHFyd3N5bnlteCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4KibK3JwaVo0CjDO/giphy.gif","https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2NiM3MycDdlMGg2eTdoNnZxbWhsaWhjNHl6aTlrNDgzeGQyamswZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9NAXEP3RiJjm8/giphy.gif", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXNpdnB2YXlmaHNjYmltZnRpaXcxZ2s0ZjRqeDFjbXJxMXN4Nms1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/beorHuw3tM7tcAFB0v/giphy.gif","https://media.tenor.com/T_avUEk3aWwAAAAi/catgroove7tv-catgroove.gif","https://media.tenor.com/TrZcpR0Kde8AAAAj/cat-meme-funny.gif"]
function displayImage() {
    const input1 = Number(document.getElementById("charInput1").value);
    const input2 = document.getElementById("charInput2").value.toUpperCase();
    const imgElement = document.querySelector(".item4");
    const charElement = document.querySelector(".item3");
    const description = document.querySelector(".desc");
    const status = document.querySelector(".msg");

    // Validate input: Check if either input is empty
    if (!input1 || !input2) {
        alert("You can't live in the quantum space yet you know.");
        return; // Exit the function if either field is empty
    }

    // Assign an image based on character (A-Z)
    const index = input2.charCodeAt(0) - 65; // 'A' is 65 in ASCII

    // Validate input range
    if (index < 0 || index >= 6 || input1 < 1 || input1 > 11) {
        alert("Evidently doomscrolling has chewed away at your attention span. READ and try again.");
        return; // Exit the function if the input is invalid
    }

    // Set flat image based on input2 (A-F)
    imgElement.style.backgroundImage = `url(${images[index]})`;
    const randomIndex = Math.floor(Math.random() * avail.length);
    const randomIndex2 = Math.floor(Math.random() * nope.length);
    const freeindex = Math.floor(Math.random() * free.length);
    const catindex = Math.floor(Math.random() * cat.length);
    // Set character image based on input1 (1-10) and the current index
    const charIndex = index + (input1 - 1) * 6;
    if ([5, 9, 13, 22, 30, 32, 39, 47, 50, 55, 62].includes(charIndex)) {
        charElement.style.backgroundImage = `url(${cat[catindex]})`;
        charElement.style.backgroundPosition = "center";
        charElement.style.backgroundSize = "cover";
        description.textContent = free[freeindex];
        status.textContent = avail[randomIndex];
    }
    else {
        charElement.style.backgroundImage = `url(${char[charIndex]})`;
        description.textContent = desc[charIndex];  // Set the description from the 'desc' array using the charIndex
        status.textContent = nope[randomIndex2];
    }
}

// Add event listener to trigger `displayImage` on pressing Enter
document.getElementById("charInput1").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        displayImage(); // Call the displayImage function when Enter is pressed
    }
});

document.getElementById("charInput2").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        displayImage(); // Call the displayImage function when Enter is pressed
    }
});
