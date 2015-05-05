var mraa = require('mraa');

console.log("MRAA version: " + mraa.getVersion()); // see version

var a = new mraa.Aio(0); 

captureTemperature();

function captureTemperature() {
    var b = a.read();
    
    b = b * 0.48826125;
    console.log("Celcius: " + b);
    
    setTimeout( function() {
        captureTemperature();
    }, 4000);
}