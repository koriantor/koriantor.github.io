//$.getScript('aj.js');

fonts = ["Abel", "Annie Use Your Telescope", "Arapey", "Black Ops One", "Cabin", "Cinzel", "Droid Sans", "EB Garamond", "Fredericka the Great", "Geo", "Habibi", "Indie Flower", "Josefin Sans", "Libre Baskerville", "Macondo Swash Caps", "Montserrat", "Montserrat Subrayada", "Open Sans", "Orbitron", "Patrick Hand SC", "Philosopher", "Play", "Poiret One", "Press Start 2P",  "Raleway", "Satisfy", "Shadows Into Light",  "The Girl Next Door", "Ubuntu", "Varela Round"];

var i = 0;

setInterval(function(){
    document.getElementById('horizon').style.fontFamily = fonts[i];
    if (i++ == fonts.length) i = 0;
}, 100)