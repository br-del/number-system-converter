function convert() {
    let inputNumber = document.getElementById('inputNumber').value;
    let base = document.getElementById('base').value;

    // Parse the input number based on the selected base
    let decimalValue;
    try {
        decimalValue = parseInt(inputNumber, base);
        if (isNaN(decimalValue)) throw "Invalid number";
    } catch (e) {
        document.getElementById('binaryResult').innerHTML = "Binary: Invalid number";
        document.getElementById('octalResult').innerHTML = "Octal: Invalid number";
        document.getElementById('decimalResult').innerHTML = "Decimal: Invalid number";
        document.getElementById('hexadecimalResult').innerHTML = "Hexadecimal: Invalid number";
        return;
    }

    // Convert decimal to other bases
    let binaryResult = decimalValue.toString(2);
    let octalResult = decimalValue.toString(8);
    let decimalResult = decimalValue.toString(10);
    let hexadecimalResult = decimalValue.toString(16).toUpperCase();

    // Update the HTML with the results
    document.getElementById('binaryResult').innerHTML = "Binary: " + binaryResult;
    document.getElementById('octalResult').innerHTML = "Octal: " + octalResult;
    document.getElementById('decimalResult').innerHTML = "Decimal: " + decimalResult;
    document.getElementById('hexadecimalResult').innerHTML = "Hexadecimal: " + hexadecimalResult;
}