let seconds = 0;
let minutes = 0; 
let hours = 0;
let miniseconds = 0;
let time;

let Start = document.querySelector("#time p");

let start = () => {

    if(!time) {

        time = setInterval(() => {
            
            miniseconds++;

            if(miniseconds === 100) {
                miniseconds = 0;
                seconds++;
            }
            if(seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if(minutes === 60) {
                minutes = 0;
                hours++;
            }

            Start.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(miniseconds).padStart(2, '0')}`;

        }, 10 );
    } 
}

let stop = () => {
    
    clearInterval(time);
    time = null;

}

let restart = () => {
    stop();
    seconds = 0;
    minutes = 0;
    hours = 0;
    miniseconds = 0;
    Start.innerText = "00:00:00:00";

}

VANTA.FOG({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xff4d4d, // Light red accent
    midtoneColor: 0x8b0000,    // Dark red base
    lowlightColor: 0x4a0000,   // Deep dark red
    baseColor: 0x240000,       // Very dark maroon
    blurFactor: 0.60,
    speed: 1.20,
    zoom: 1.00
});
