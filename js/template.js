console.log("template.js loaded");

fetch("https://raw.githubusercontent.com/0yqc/0yqc.github.io/refs/heads/main/templates/header.html")
    .then(response => {
        console.log("Response status:", response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.text();
    })
    .then(data => {
        console.log("Fetched data:", data);
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching header:', error);
    });
