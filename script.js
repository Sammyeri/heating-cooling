let actualTemp = Number(prompt("What is the current temperature?"));
let desiredTemp = Number(prompt("what is the desired temperature?"));

if (actualTemp<desiredTemp){
    console.log("Run heat");
} else if(actualTemp>desiredTemp){
    console.log("Run A/C");
} else {
    console.log("Standby");
}

let tempCelsius = Number(prompt("what is the temperature in Celsius?"));
let targetUnit = prompt("what unit of temperature would you like, C-Celsius, F-Fariegnheight, or K-Kelvin");

switch(targetUnit){
    case "C":
        console.log(tempCelsius);
        break
    case "F":
        console.log((tempCelsius * 1.8) +32);
        break
    case "K":
        console.log(tempCelsius +273.15);
        break
}