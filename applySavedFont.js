function applySavedFont() {
    var savedFont = 'amiga';
    if (window.localStorage) {
        savedFont = localStorage.getItem('selectedFont') || savedFont;
    }
    if (document.body) {
        document.body.style.fontFamily = (savedFont == 'macintosh') ? 'macintosh, sans-serif' : 'amiga, sans-serif';
    } else {
        return;
    }
}
window.onload = applySavedFont;
