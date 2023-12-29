function myFunction() {
    var text = document.getElementById('mySpan1').value;
    text = text.split(' ').join('');
    document.getElementById('mySpan2').innerText = text;
}