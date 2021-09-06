ThemeColorNavLight = "#cccccc";
ThemeColorNavDark = "#35393f";
ThemeColorBackLight = "#f1f1f1";
ThemeColorBackDark = "#282C36";
ThemeColorTextLight = "#282C36";
ThemeColorTextDark = "#818181";
ThemeButtonNameLight = "Hell";
ThemeButtonNameDark = "Dunkel";
//Funktionen, damit themes funktionieren
function changeToTheme(backgroundColor,navColor,textColor,themeName){
    document.body.style.backgroundColor = backgroundColor;
    document.getElementById("sideNav").style.backgroundColor = navColor;
    document.body.style.color = textColor;
    document.getElementById("themeToggleButton").innerHTML = themeName;
}
theme = localStorage.getItem("theme"); 
function initializeTheme(){
    if(theme=="light"){
        changeToTheme(ThemeColorBackLight,ThemeColorNavLight,ThemeColorTextLight,ThemeButtonNameLight);
    }
    else{
        changeToTheme(ThemeColorBackDark,ThemeColorNavDark,ThemeColorTextDark,ThemeButtonNameDark);
    }
}
function toggleTheme(){
    theme = localStorage.getItem("theme"); 
    if(theme=="dark"){
        changeToTheme(ThemeColorBackLight,ThemeColorNavLight,ThemeColorTextLight,ThemeButtonNameLight);
        localStorage.setItem("theme","light");
    }
    else{
        changeToTheme(ThemeColorBackDark,ThemeColorNavDark,ThemeColorTextDark,ThemeButtonNameDark);
        localStorage.setItem("theme", "dark");
    }  
}
initializeTheme();
