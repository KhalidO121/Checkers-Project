let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', () =>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');

                }, (idx + i) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },4300);
    })
})

// Pressing play to start the game.
function startGame(){
    let localButton = document.getElementById("1V1 MODE")
    let displayButton = localButton.style.display

    if(displayButton == 'block'){
        localButton.style.display = 'none'

        document.getElementById("1V1 MODE").innerHTML = "Let's Not Play!"
    }

    else{
        localButton.style.display = 'block'

        document.getElementById("1V1 MODE").innerHTML = "Let's Play!"

    }
    // document.getElementById("1V1 MODE").innerHTML = "Let's Play!"
}

// Now going to add page transitions to our game
