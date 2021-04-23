// File name: main.js
// Date: 23-04-2021
// Author: Kylian de Rooij
// Student number: s4549503

// Note:
// I Tried putting the program into functions, but it ended up breaking the entire program. I've added my attempt below
// in a comment (the same goes for the sidebar).

if (window.location.href.includes("index.html")) {
    document.title = "Webprogramming (LIX018P05) - Index";
} else if (window.location.href.includes("second.html")) {
    document.title = "Webprogramming (LIX018P05) - Second";
}


var elements = document.querySelectorAll("#links ul li a");
for (i = 0; i < elements.length; i++) {
    elements[i].setAttribute('href', 'https://google.com/');
    elements[i].setAttribute('target', '_blank');
}


if (window.location.href.includes("index.html")) {
    let articleContainer = document.querySelector('.article');
    let dynamicHtml = `
        <h1>This is my second article</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. Cras eu tellus ex. Integer
            bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, maximus ut eros vel, rutrum semper sem. Duis
            a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. Pellentesque eget eleifend velit. Aenean aliquam auctor
            nibh vitae tristique. Nulla facilisi.</p>
        
        `;
    let articleElement = document.createElement('article');
    articleElement.innerHTML = dynamicHtml;
    articleContainer.appendChild(articleElement);
}


var elements = document.getElementsByClassName('nav-item');
for (i = 0; i < elements.length; i++) {
    elements[i].firstElementChild.style.color = 'red';
}


// Attempt to add sidebar (if I add it, nothing else works for some reason)
/*
if window.location.href.includes('second.html') {
    document.querySelector('.col-md-12').setAttribute('class', 'col-md-8'); // Works in console, but not in code for some reason

    let columnContainer = document.querySelector('.container');
    let dynamicHtml = `
        <h1>Sidebar</h1>

        `;
    let columnElement = document.createElement('div');
    columnElement.setAttribute('class', 'col-md-4')
    columnElement.innerHTML = dynamicHtml;
    columnContainer.appendChild(columnElement);
}
 */


// Attempt to use functions (entire program breaks)
/*
function changeTitle() {
    if (window.location.href.includes("index.html")) {
        document.title = "Webprogramming (LIX018P05) - Index";
    } else if (window.location.href.includes("second.html")) {
        document.title = "Webprogramming (LIX018P05) - Second";
    }
}


function changeLinks() {
    var elements = document.querySelectorAll("#links ul li a");
    for (i = 0; i < elements.length; i++) {
        elements[i].setAttribute('href', 'https://google.com/');
        elements[i].setAttribute('target', '_blank');
    }
}


function addArticle() {
    if (window.location.href.includes("index.html")) {
        let articleContainer = document.querySelector('.article');
        let dynamicHtml = `
        <h1>This is my second article</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. Cras eu tellus ex. Integer
            bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, maximus ut eros vel, rutrum semper sem. Duis
            a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. Pellentesque eget eleifend velit. Aenean aliquam auctor
            nibh vitae tristique. Nulla facilisi.</p>

        `;
        let articleElement = document.createElement('article');
        articleElement.innerHTML = dynamicHtml;
        articleContainer.appendChild(articleElement);
    }
}


function changeColor {
    var elements = document.getElementsByClassName('nav-item');
    for (i = 0; i < elements.length; i++) {
        elements[i].firstElementChild.style.color = 'red';
    }
}


function addSidebar() {
    document.querySelector('.col-md-12').setAttribute('class', 'col-md-8'); // Works in console, but not in code for some reason

    let columnContainer = document.querySelector('.container');
    let dynamicHtml = `
    <h1>Sidebar</h1>

    `;
    let columnElement = document.createElement('div');
    columnElement.setAttribute('class', 'col-md-4')
    columnElement.innerHTML = dynamicHtml;
    columnContainer.appendChild(columnElement);
}


function eventListener() {
    changeTitle();
    changeLinks();
    changeColor();
    if (window.location.href.includes('index.html')) {
        addArticle();
    } else if (window.location.href.includes('second.html')) {
        addSidebar();
    }
}

eventListener();
*/