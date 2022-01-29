//get String From document
function getString() {
    document.getElementById("alert").classList.add("invisible");
    let strInput = document.getElementById("stringInput").value;
    let reverseStr;

    reverseStr = reverseString(strInput);

    displayString(reverseStr);
}

//Reverse the String
function reverseString(str) {
    let reverseStr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}
//Display String
function displayString(str) {
    document.getElementById("msg").innerHTML = str;
    document.getElementById("alert").classList.add("visible");
}