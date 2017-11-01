document.getElementById("demo").onclick = function() {getDate()};

function getDate() {
    document.getElementById("demo").innerHTML = Date();
}