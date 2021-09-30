/*function getRandomColor() {
    let colors = [#E0371F, #1FC8E0, #00FF6C, #1FABE0, #D3842C];
    for (let i = 0; i < colors.length; i++) {
        let chosenColor = colors[Math.floor(Math.random()*colors.length)];
        return chosenColor;
    }
}*/

function changeEverything() {
    document.getElementById("GIF-media").src="media/RickAstleyDancing.GIF";

    let header = document.getElementById("heading");
    let msg = document.getElementById("message");
    header.textContent = "You got rickrolled";
    msg.textContent = "Thank you for participating!";

    let gradiantbody = document.body;
    gradiantbody.textContent = getRandomColor();
}