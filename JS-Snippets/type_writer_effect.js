var i = 0;
var txt = 'I Love to Create Things'

function typeWriter(){
    if (i < txt.lenght) {
        document.getElementById('demo').innerHTML += txt.charAt(i)
        i++
        setTimeout(typeWriter, 50); // 50 is a speed
    }
}