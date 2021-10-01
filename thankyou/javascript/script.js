function getRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16)
}

function changeEverything() {
    document.getElementById("GIF-media").src="media/RickAstleyGIF.gif";

    let header = document.getElementById("heading");
    let msg = document.getElementById("message");
    header.textContent = "You got rickrolled";
    msg.textContent = "Thank you for participating!";
    
    let gradiantbody = document.body;
    gradiantbody.style.background = getRandomColor();

    let song = document.getElementById("song");
    song.style.display = 'hidden';
    song.play();
}