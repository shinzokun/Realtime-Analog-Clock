let hour = document.getElementById("Hour");
let minute = document.getElementById("Minute");
let second = document.getElementById("Second");

setInterval(() => {
    let currentDate = new Date();
    let hourHand = currentDate.getHours();
    let minuteHand = currentDate.getMinutes();
    let secondHand = currentDate.getSeconds();

    let rotateHour = 30*hourHand;
    let rotateMinute = 6*minuteHand;
    let rotateSecond = 6*secondHand;

    hour.style.transform = `rotate(${rotateHour}deg)`;
    minute.style.transform = `rotate(${rotateMinute}deg)`;
    second.style.transform = `rotate(${rotateSecond}deg)`;

}, 1000);

let nut = document.getElementById("Nut");
nut.addEventListener("click", () => {
    document.getElementById("Body").style.backgroundColor = "#eee";
})