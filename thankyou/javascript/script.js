function getRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16)
}

function changeEverything() {
    let mainHeaderIcon = document.getElementById("header-icon");
    let mainHeaderText = document.getElementById("header-text");
    let header = document.getElementById("heading");
    let msg = document.getElementById("message");

    // Chaning things in the header
    mainHeaderIcon.remove();
    mainHeaderText.textContent = "Gotcha!";

    // Changing main GIF
    document.getElementById("GIF-media").src="media/RickAstleyGIF.gif";

    // Adding GIFs decor
    let leftPic = document.createElement('img');
    leftPic.src="media/RickHead.gif";
    document.getElementById('leftpic').appendChild(leftPic);

    let rightPic = document.createElement('img');
    rightPic.src="media/RickHead.gif";
    document.getElementById('rightpic').appendChild(rightPic);

    let bottomPic = document.getElementById("bottompic");
    let topPic = document.getElementById("toppic");
    topPic.src="media/RickRoll.gif";
    bottomPic.src="media/RickRoll.gif";

    // == Message ==
    header.textContent = "You got rickrolled";
    msg.textContent = "Thank you for participating!";
    
    // == Changing BG color ==
    let gradiantbody = document.body;
    gradiantbody.style.background = getRandomColor();

    // == Plays audio ==
    let song = document.getElementById("song");
    song.play();
}