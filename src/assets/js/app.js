import gsap from "gsap";

const bar = document.querySelector('.loading__bar--inner');
const counter_num = document.querySelector('.loading__counter--number');
let c = 0;
const gen_bg = "#58fa22";
const light_blue_color = "#3895b9";


let barInterval = setInterval(() => {
    bar.style.width = c + "%";
    counter_num.innerText = c + "%";
    c++;
    if (c > 100) {
        clearInterval(barInterval);
        document.getElementById('eye').style.background = gen_bg;
        document.getElementById('eye2').style.background = gen_bg;
        gsap.to(bar, {
            backgroundColor: light_blue_color, // Change the background color to match the circle
            rotation: 7200, // 360 degrees rotation
            duration: 2, // Animation duration
            ease: "power2.in", // Easing function for acceleration
            borderRadius: '100%',
            scaleY: 45,
        });
        gsap.to('.loading__counter,.loading__text', {
            opacity: 0, // Hide the counter
            duration: 2, // Animation duration
            ease: "power2.in", // Easing function for acceleration
        });
        gsap.to('.loading__box', {
            height: "500px",
            duration: 2, // Animation duration
            ease: "power2.in", // Easing function for acceleration
            borderRadius: '50%',
        });
        gsap.to('.loading__box', {
            delay: 2,
            border: "none",
        });
        gsap.to('.loading', {
            delay: 2,
            duration: 2, // Animation duration
            //zIndex: 1,
            background: "transparent",
            opacity: 1,
        });
        setTimeout(() => {
            /*
            gsap.to('.loading__svg', {
                height: "500px",
                opacity: 1,
                rotate: 360,
                duration: 4, // Animation duration
            });
            */
            const transitionCircle = document.querySelector('.transition-circle');
            transitionCircle.style.width = '200vw'; // Expand circle width to cover the screen
            transitionCircle.style.height = '200vw'; // Expand circle height to cover the screen
            gsap.to('.loading__bar', {
                opacity: 0, // Hide the counter
                duration: 0.1, // Animation duration
            });
            // After a delay, hide the circle
            setTimeout(() => {
                transitionCircle.style.opacity = '0'; // Hide the circle by setting opacity to 0
                transitionCircle.style.width = '0'; // Reset circle width
                transitionCircle.style.height = '0'; // Reset circle height
            }, 2000); // Change the delay (in milliseconds) to match your animation duration
            // After the animation completes, reverse the animation
            setTimeout(() => {
                transitionCircle.style.opacity = '1'; // Restore circle opacity
                transitionCircle.style.width = '0'; // Reset circle width
                transitionCircle.style.height = '0'; // Reset circle height
                document.getElementById('eye').style.background = light_blue_color;
                document.getElementById('eye2').style.background = light_blue_color;
                document.getElementsByClassName('landing')[0].style.opacity = 1;
                //could change
                document.getElementsByClassName('loading')[0].style.display = "none";
            }, 1000); // Change the delay (in milliseconds) to match your animation duration
        }, 1980); // Ensure this setTimeout starts after the rotation animation (2 seconds)
    }
}, 20);