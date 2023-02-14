const soma = () =>   {

    var soma1 = parseInt(document.getElementById("valor1").value);
    var soma2 = parseInt(document.getElementById("valor2").value);
    var soma3 = parseInt(document.getElementById("valor3").value);
    
    
    document.querySelector("#aquiresultado").innerHTML = (soma1 * soma2 / soma3);
    
    }
    
    function gps() {
        
    
        var onSuccess = function(position) {
            alert('Latitude:'   +position.coords.latitude  +'\n'+
            'Longitude:'       +position.coords.longitude  +'\n' +
            'Altitude:'  +position.coords.altitude  +'\n' +
            'Altitude Accuracy : ' + position.coords.altitudeAccuracy +'\n'+
            'Heading:' + position.coords.heading +'\n'+
            'Speed:' +position.coords.speed +'\n'+
              'Timestamp:' +position.coords.timestamp +'\n');
        };
    
        //onError Callback receives a PositionError object //
    
        function onError(error) {
            alert('code:'  +error.code  +'\n'+
                            'message:' +error.message +'\n');
        }
    
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
        };