var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       print(xhttp.responseText);
       document.getElementsByTagName('P').innerHTML=xhttp.responseText;
    }
};
xhttp.open("GET", "http://search.roblox.com/catalog/json", true);
xhttp.send();
