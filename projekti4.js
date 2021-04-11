function addnew(uusTehtava) {
    var getContent =  document.getElementById('uusTehtava').value;
    if (getContent !== '') {
        var uusirivi = document.createElement('tr');
        var content = document.createTextNode(getContent);
        uusirivi.appendChild(content);
        uusirivi.setAttribute('class', 'rivi');
        uusirivi.innerHTML += ' <button onclick="this.parentNode.remove()">x</button>';    
        document.getElementById("tulos").appendChild(uusirivi);
        uusirivi.addEventListener ("click", function() {
        this.classList.toggle("tehty");
    });
    document.getElementById('uusTehtava').value = '';
    } else {
        alert('add new course');
    }
}
