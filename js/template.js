console.log("template.js loaded")
fetch("../templates/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => console.error('Error fetching header:', error));
