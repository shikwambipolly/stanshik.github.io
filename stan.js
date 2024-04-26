
var i = 0;
var text = "Hello there! I'm Stan :)";

function typing() {
    if (i < text.length) {
        document.getElementById('sup').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 200);
    }
}

typing();


