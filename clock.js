const hourEl =document.querySelector( ".hour");
const minuteEl =document.querySelector( ".minute");
const secondEl =document.querySelector( ".second");

function Updateclock() {
    const currentDate = new Date();
    setTimeout(Updateclock,1000);
    const hour=currentDate.getHours();
    const minute=currentDate.getMinutes();
    const second=currentDate.getSeconds();
    const hourDeg=(hour/12)*360;
    hourEl.style.transform=`rotate(${hourDeg}Deg)`;
    const minuteDeg=(minute/60)*360;
    minuteEl.style.transform=`rotate(${minuteDeg}Deg)`;
    const secondDeg=(second/60)*360;
    secondEl.style.transform=`rotate(${secondDeg}Deg)`;
}

Updateclock();