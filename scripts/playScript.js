// const swup = new Swup()

// let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')
let playArea = document.querySelector('.playArea')

window.addEventListener('DOMContentLoaded', () =>{

    setTimeout(()=>{

        // logoSpan.forEach((span, idx)=>{
        //     setTimeout(()=>{
        //         span.classList.add('active');
        //     },(idx + 1) * 400)
        // });

        // setTimeout(()=>{
        //     logoSpan.forEach((span, idx)=>{

        //         setTimeout(()=>{
        //             span.classList.remove('active');
        //             span.classList.add('fade');

        //         }, (idx + i) * 50)
        //     })
        // },2000);

        // setTimeout(()=>{
        //     intro.style.top = '-100vh';
        // },0);

        setTimeout(()=>{
            playArea.style.opacity = '1';
        },500)
    })
})



// Now going to add page transitions to our game
