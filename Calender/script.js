// let day = document.querySelector("#day");

let Calender = new Date;

let Datee = document.querySelector("#date");
Datee.innerHTML = Calender.getDate();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[day.getDay()]);
let Day = document.querySelector("#day");
Day.innerHTML = days[Calender.getDay()];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let Month = document.querySelector("#month");
Month.innerHTML = months[Calender.getMonth()];


let Year = document.querySelector("#year");
Year.innerHTML = Calender.getFullYear();

VANTA.WAVES( {
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x052d27, // Aapke calendar ke dark green theme se milta-julta color
  shininess: 30.00,
  waveHeight: 15.00,
  waveSpeed: 1.00,
  zoom: 0.85,
} );
