<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Caesar+Dressing&family=DotGothic16&family=Geostar+Fill&family=Ma+Shan+Zheng&family=Montserrat+Alternates:ital,wght@0,100;1,300&family=Permanent+Marker&family=Special+Elite&family=VT323&display=swap" rel="stylesheet">
        
        <!--  -->
        <link rel="stylesheet" href="style.css">
        <title>CHECKERS GAME</title>  
    </head>
    <body>

        <!-- <script>
            const ws = new WebSocket("ws://localhost:8050");
        </script> -->
    
        <div class = "intro">
            <h1 class = "logo-header">
                <!--Have two different span classes because I'm going to do seperate animations
                on each part of checkers name-->
                <span class = "logo">Ch</span><span class ="logo">ec</span><span class="logo">ke</span><span class="logo">rs.</span>
            </h1>
        </div>

        <header>
            <h4>CHECKERS</h4>
        </header>

        <!-- PLAY BUTTON -->
        <a class="playLink" href="play.html">PLAY!</a>

        <!-- TUTORIAL LINK AND BOX -->
        <div class="tutorialWrapper">
            <a class="tutorialLink" href="#tutorialBox" >TUTORIAL</a>
        </div>

        <div id="tutorialBox" class="tutorial">
            <div class="tutorialContent">
                <h1>HOW TO PLAY</h1>
                <h3>General</h3>
                <p>&#8226; Checkers is a Board Game between two people on a 8x8 checked Board.</p>
                <br>
                <p>&#8226; Each player has 12 flat round disks on each grey square on the Board.</p>
                <br>
                <p></p>
                <p>&#8226; Each player has a different disk colour which is either Black or White.</p>
                <br>
                <h3>How to take a turn</h3>
                <p>&#8226; Each player moves a disk diagonlly to the next grey square towards the
                opponent. </p>
                <br>
                <p>&#8226; If there is an opponents disk next to your disk and an empty space on 
                the other side you jump over the opponent and remove their disk. </p>
                <br>
                <p style= color:#FF0000;>&#8226; NOTE: IF YOU HAVE A JUMP YOU MUST TAKE IT! </p>
                <br>
                <h3>King Disks</h3>
                <p>&#8226; The last row is called the King row.</p>
                <br>
                <p>&#8226; If you get a disk across to the opponents King row that disk becomes a King.</p>
                <br>
                <p>&#8226; King Disks can move in both forward and backward directions.</p>
                <br>
                <h3>Winning the Game</h3>
                <p>&#8226; You win the game when the opponent has no more disks or can't move (even if
                 they still have disks).</p>
                <br>
                <a href="#" class="tutorialClose">&times;</a>
            </div>
        </div>
        
        
        <!-- SETTINGS BUTTON -->
        <div class="settingsWrapper">
            <a class="settingsLink" href="#settingsBox" >SETTINGS</a>
        </div>

        <div id="settingsBox" class="settings">
            <div class="settingsContent">
                <!-- <input type="muteButton" src="images/sound-png-35795.png"/> -->
                <audio id = "background_music" controls loop autoplay="autoplay">
                <source src="background_music/Bliss of Heaven (Club Mix) - SOMM (No Copyright Music) _ Release Preview.mp3">
                </audio>
                <a href="#" class="settingsClose">&times;</a>
            </div>
        </div>
        
        
        <!-- Linking to Javascript file -->
        <script src="scripts/indexScript.js"></script>

        <!-- BACKGROUND PARTICLES -->
        <div id="particles-js">
            <div class="center-text">
                
            </div>
        </div>
        <!-- particles js files -->
        
        <script src="background_particles/particles.js"></script>
        <script src="background_particles/app.js"></script>
        
    </body>
</html>