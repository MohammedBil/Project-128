song = "";

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() 
{
    image(video, 0, 0, 600, 500);
}


function play()
{
    song.play
    song.setVolume(1);
    song.rate(1);
}

