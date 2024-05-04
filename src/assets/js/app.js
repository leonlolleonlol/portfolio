const bar = document.querySelector('.loading__bar--inner');
const counter_num = document.querySelector('.loading__counter--number');
let c = 0;

let barInterval = setInterval(() => {
    bar.style.width = c + "%";
    counter_num.innerText = c + "%";
    c++;
    if (c === 101) {
        clearInterval(barInterval);
        document.querySelector('.loading').classList.add('loading--hidden');
        document.getElementById('eye').style.background="#d9ff88";
        document.getElementById('eye2').style.background="#d9ff88";
    }
}, 20);