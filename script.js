function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var scale = document.getElementById("scale").value;
    var result = document.getElementById("result");

    if (isNaN(inputTemp)) {
        result.innerHTML = "Invalid input. Please enter a number.";
    } else {
        if (scale === "C") {
            var fahrenheit = (inputTemp * 9 / 5) + 32;
            result.innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2);
        } else {
            var celsius = (inputTemp - 32) * 5 / 9;
            result.innerHTML = "Celsius: " + celsius.toFixed(2);
        }
    }
}