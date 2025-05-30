function isOldBrowser() {
    var ua = navigator.userAgent;
    if (
        ua.indexOf('MSIE') != -1 && parseInt(ua.split('MSIE')[1]) < 9 ||
        ua.indexOf('Netscape') != -1 && parseInt(ua.split('/')[1]) < 9 || 
        ua.indexOf('Opera') != -1 && parseInt(ua.split(' ')[1]) < 10 || 
        ua.indexOf('Mozilla') != -1 && parseInt(ua.split('/')[1]) < 4 ||
        ua.indexOf('IBrowse') != -1 ||
        ua.indexOf('Voyager') != -1 ||
        ua.indexOf('AWeb') != -1
    ) {
        return true;
    }  else {
      return false;
    }

  }

if(!isOldBrowser()){
document.addEventListener('DOMContentLoaded', function() {
    function applyFont(font) {
        console.log("Applying font: ", font);
        document.body.style.fontFamily = font === 'macintosh' ? 'macintosh, sans-serif' : 'amiga, sans-serif';
    }

    function loadFont() {
        const savedFont = localStorage.getItem('selectedFont') || 'amiga';
        console.log("Loaded font from localStorage: ", savedFont);
        applyFont(savedFont);
    }

    const fontSelect = document.getElementById('fonts');
    if (fontSelect) {
        fontSelect.addEventListener('change', function() {
            const selectedFont = fontSelect.value;
            console.log("User selected font: ", selectedFont);
            applyFont(selectedFont);
            localStorage.setItem('selectedFont', selectedFont);
        });

        loadFont();
        fontSelect.value = localStorage.getItem('selectedFont') || 'amiga';
    } else {
        loadFont();
    }
});
}
