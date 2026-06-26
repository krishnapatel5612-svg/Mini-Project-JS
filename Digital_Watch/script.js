
function timer() {

        let time = new Date();

        let hours = time.getHours();

        let minutes = String(time.getMinutes()).padStart(2, '0');

        let seconds = String(time.getSeconds()).padStart(2,'0');

        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = String(hours).padStart(2, '0');

        let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        
        let display = document.querySelector("#time");

        display.innerHTML = timeString;



}

setInterval(timer, 1000);

timer();


VANTA.FOG({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xfefeff, // White accent
    midtoneColor: 0x1111119,    // Dark grey base
    lowlightColor: 0x0a0a0f,   // Deep dark red
    baseColor: 0x050508,       // Very dark maroon
    blurFactor: 0.60,
    speed: 1.20,
    zoom: 1.00

//     highlightColor: 0xffffff, // White accent
//     midtoneColor: 0x8000e0e,    // Dark grey base
//     lowlightColor: 0x4a0000,   // Deep dark red
//     baseColor: 0x240000,       // Very dark maroon

//     midtoneColor: 0x48bfc0,    // Dark grey base
//     lowlightColor: 0x237071,   // Deep dark red
//     baseColor: 0x123c3d,

});

