
var xhr = new XMLHttpRequest();
xhr.onload = function () {

    xml = this.responseText;
    //console.log(xml);

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml, "text/xml");

    //console.log(xmlDoc);

    // two ways to get data [iterate DOM]
    document.getElementById("name").innerHTML = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    // or [query DOM]
    document.getElementById("name").innerHTML = xmlDoc.querySelector("name").textContent;


    // get an array from XML [query DOM]
    var myarray = xmlDoc.querySelectorAll("loadout weapon");

    myarray.forEach(element => { // or function (element)
        document.getElementById("weapons").innerHTML += element.getAttribute("type") + "<br>"; // getting att
    });



};
xhr.open('GET', 'game.xml');
xhr.send();
