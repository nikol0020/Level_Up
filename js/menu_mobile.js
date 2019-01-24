var menuBtn = document.getElementById('menuBtn');
var menuContainer = document.getElementById('menuContainer');

var menuIconClosed = "menu-icon closed"; //class name for closed button
var menuIconOpened = "menu-icon opened"; //class name for opened button
var menuContClosed = "menu-icon__container closed"; //class name for closed menu
var menuContOpened = "menu-icon__container opened"; //class name for opened menu

menuBtn.onclick = function() {
    if (menuBtn.className == menuIconClosed) {
        menuBtn.className = menuIconOpened;
        menuContainer.className = menuContOpened;
    } else if (menuBtn.className == menuIconOpened) {
        menuBtn.className = menuIconClosed;
        menuContainer.className = menuContClosed;
    }
}