var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

var port = new SerialPort('/dev/ttyS0', {
    autoOpen: false,
    baudRate: 57600,
    parser: serialport.parsers.readline('\n')
});
// pc debug
// var port = new SerialPort('COM5', {
//     autoOpen: false,
//     baudRate: 57600,
//     parser: SerialPort.parsers.readline('\n')
// });
var serialport = {};

serialport.isOpen = function () {
    return port.isOpen();
};

serialport.write = function (command, callback) {
    port.write(command, function () {
        port.drain(callback);
    });
};

serialport.getData = function () {
    
};

port.on('data', function (data) {
    console.log('Data: ' + data);
});

// open errors will be emitted as an error event 
port.on('error', function (err) {
    console.log('Error: ', err.message);
});

module.exports = serialport;