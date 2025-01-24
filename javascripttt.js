

let hours;
let minuttes;
let amorpm;
let divfortime = document.getElementsByClassName("time")[0];
let ac = new Date();

let disclaimer = document.getElementById("broo");

let currentHours = ac.getHours();
// console.log(typeof currentHours)
let currentMinutes = ac.getMinutes();
// console.log(currentMinutes)
    setInterval(function () {
let fulldata =  new Date(); 
let amorpm = fulldata.toLocaleTimeString();
divfortime.innerHTML = `${amorpm}`;
    
    }, 1000);

let elem = document.getElementsByClassName("buttontype")[0];
elem.addEventListener("click", function() {
 hours = document.getElementById("hoursofam");
 minuttes = document.getElementById("minutes");
 amorpm = document.getElementById("seconds");

 let alarmhours  = hours.value;
let alarmminutes = minuttes.value;
let alarmamorpm = amorpm.value;
alarmhours = parseInt(alarmhours);
alarmminutes = parseInt(alarmminutes);
// console.log(typeof alarmhours)
// console.log(typeof alarmminutes)

 if (alarmhours>currentHours && alarmminutes > currentMinutes){
 let realhours = alarmhours - currentHours;
 let realminutes = alarmminutes - currentMinutes;
 let settimeoutsecond = realhours*3600;
 let settimeoutseconds = realminutes*60;
 let TherealShit = settimeoutsecond + settimeoutseconds;

disclaimer.innerHTML = ` The alarm will rang after ${TherealShit/60} minutes later `;
 
 setTimeout(function () {
    disclaimer.innerHTML = "";
}, 2000 );


 setTimeout(function (){
    var audio = new Audio('lofi-alarm-clock-243766.mp3');
    audio.play();
 }, TherealShit*1000);
 }

  else if (alarmhours>currentHours && alarmminutes < currentMinutes){
    let a = new Date()
    let currentMinutes = a.getMinutes();
    let currentseconds = a.getSeconds();
    let currentHours = a.getHours();

 let realhours = alarmhours - currentHours;
 let realminutes = currentMinutes - alarmminutes;

 let hnm = realhours*60;
 let newone = hnm - realminutes;

 let hoursinseconds = realhours*3600;
 let minutesinseconds = realminutes*60;

 let timespan = hoursinseconds - minutesinseconds;
 let mimespan = timespan - currentseconds;

disclaimer.innerHTML = ` The alarm will rang after ${newone} minutes later `;
setTimeout(function () {
    disclaimer.innerHTML = "";
}, 2000 );
 setTimeout(function (){
    var audio = new Audio('lofi-alarm-clock-243766.mp3');
    console.log("audio ranged succssfully");
    audio.play();
 }, mimespan*1000);
 }

 else if (alarmhours == currentHours && alarmminutes > currentMinutes){
    let a = new Date()
    let currentMinutes = a.getMinutes();
    let currentHours = a.getHours();
    let currentseconds = a.getSeconds();

    let realminutes = alarmminutes - currentMinutes;
    // console.log(realminutes)
    let min = realminutes*60;
    let tin = min - currentseconds;


    disclaimer.innerHTML = ` The alarm will rang after ${alarmhours - currentHours} hours ${realminutes} minutes later `;

    setTimeout(function () {
        disclaimer.innerHTML = "";
    }, 2000 );


    setTimeout(function ()  {
    var audio = new Audio('lofi-alarm-clock-243766.mp3');
    console.log("Audio played successfullyy.....")
       audio.play();
    }, tin*1000);

 }

 else if (alarmhours<currentHours && currentMinutes > alarmminutes){
    let ab = new Date()
    let currentMinutes = ab.getMinutes();
    let currentHours = ab.getHours();
    let currentseconds = ab.getSeconds();

let a = 24 - currentHours;
let b = a+alarmhours;
let c = b*3600;
let d = currentMinutes - alarmminutes;
let e = d*60;
let f = c -e;
let g = f - currentseconds
disclaimer.innerHTML = ` The alarm will rang after ${b} hours ${d} minutes later `;

setTimeout(function () {
    disclaimer.innerHTML = "";
}, 2000 );

setTimeout(function (){
    var audio = new Audio('lofi-alarm-clock-243766.mp3');
    // console.log("audio ranged succssfully");
    audio.play();
 }, g*1000);

 }

 else if (alarmhours<currentHours && currentMinutes < alarmminutes){
    let ab = new Date()
    let currentMinutes = ab.getMinutes();
    let currentseconds = ab.getSeconds();
    let currentHours = ab.getHours();
let a = 24 - currentHours;
let b = a+alarmhours;
let c = b*3600;
let d = currentMinutes*60;
let e = c+d;
let f = e - currentseconds

disclaimer.innerHTML = ` The alarm will rang after ${b} hours ${alarmminutes-currentMinutes} minutes later `;

setTimeout(function (){
    var audio = new Audio('lofi-alarm-clock-243766.mp3');
    // console.log("audio ranged succssfully");
    audio.play();
 }, f *1000);
 }

 else if (alarmhours == currentHours && alarmminutes < currentMinutes){
    let a = new Date()
    let currentMinutes = a.getMinutes();
    let currentHours = a.getHours();
    let currentseconds = a.getSeconds();

    let hoursinseconds = 23*3600;
    let minute = currentMinutes - alarmminutes;
    let haha = 60-minute;
    let minn = haha*60;
    let total = hoursinseconds + minn;
    let f  = total - currentseconds;



    disclaimer.innerHTML = ` The alarm will rang after 23 hours ${f} minutes later `;

setTimeout(function () {
    disclaimer.innerHTML = "";
}, 2000 );



    setTimeout(function ()  {
    var audio = new Audio('lofi-alarm-clock-243766.mp3');
    console.log("Audio played successfullyy.....")
       audio.play();
    }, f*1000);

 }


 else if(currentHours>alarmhours && currentMinutes == alarmminutes){

    let a = new Date()
    let currentMinutes = a.getMinutes();
    let currentHours = a.getHours();
    let currentseconds = a.getSeconds();
    let hour = currentHours - alarmhours ;
    let maxhour  = 24 - hour;
    let hoursinseconds  = maxhour*3600;

    let totalseconds = hoursinseconds - currentseconds ;
    disclaimer.innerHTML = ` The alarm will rang after ${maxhour} hours ${currentHours} minutes later `;

    setTimeout(function () {

        disclaimer.innerHTML = "";
    }, 2000 );    
    
        setTimeout(function ()  {
        var audio = new Audio('lofi-alarm-clock-243766.mp3');
        console.log("Audio played successfullyy.....")
           audio.play();
        }, totalseconds*1000);
    
 }


 else if(currentHours<alarmhours && currentMinutes == alarmminutes){

    let a = new Date()
    let currentMinutes = a.getMinutes();
    let currentHours = a.getHours();
    let currentseconds = a.getSeconds();
    
    let hours = currentHours - alarmhours;
    let hoursinseconds  = hours*3600;
    let newhour = hoursinseconds - currentseconds;
    disclaimer.innerHTML = ` The alarm will rang after ${hours} hours ${currentHours} minutes later `;

    setTimeout(function () {

        disclaimer.innerHTML = "";
    }, 2000 );    
    
        setTimeout(function ()  {
        var audio = new Audio('lofi-alarm-clock-243766.mp3');
        console.log("Audio played successfullyy.....")
           audio.play();
        }, newhour*1000);
    

        
 }


 else if (currentHours == alarmhours && currentMinutes == alarmminutes){
    disclaimer.innerHTML = ` The alarm is ranging `;

    setTimeout(function () {

        disclaimer.innerHTML = "";
    }, 2000 );    
    
        setTimeout(function ()  {
        var audio = new Audio('lofi-alarm-clock-243766.mp3');
        console.log("Audio played successfullyy.....")
           audio.play();
        }, 100);
    
 }




});

