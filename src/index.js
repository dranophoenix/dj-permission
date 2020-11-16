function displayValue(value) {
    let result = document.getElementById("result");
    result.innerHTML = value;
}

function getPilotsRanks() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          displayValue(this.responseText);
        }
      };

    xhttp.open("GET", "http://localhost/pilots/ranks", true);
    xhttp.send();
}
let button = document.getElementById("req");
button.onclick = function() {
    getPilotsRanks();
}