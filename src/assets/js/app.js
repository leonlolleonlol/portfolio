const bar = document.querySelector('.loading__bar--inner');
const counter_num = document.querySelector('.loading__counter--number');
let c = 0;

let barInterval = setInterval(() => {
    bar.style.width = c + "%";
    counter_num.innerText = c + "%";
    c++;
    if (c > 100) {
        clearInterval(barInterval);
        document.getElementById('eye').style.background = "#d9ff88";
        document.getElementById('eye2').style.background = "#d9ff88";
        const transitionCircle = document.querySelector('.transition-circle');
        transitionCircle.style.width = '200vw'; // Expand circle width to cover the screen
        transitionCircle.style.height = '200vw'; // Expand circle height to cover the screen

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
        }, 1000); // Change the delay (in milliseconds) to match your animation duration
    }
}, 20);
