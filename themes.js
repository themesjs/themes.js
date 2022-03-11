// themes.js von CuzImBisonratte
// https://github.com/themes-js/themes.js

// 
// Farbcodes
// 

// Navigation - Hintergrund
ThemeDarkNavBackground = "#111111";
ThemeLightNavBackground = "#ffffff";

// Navigation - Text
ThemeDarkNavText = "#ffffff";
ThemeLightNavText = "#000000";

// Seite - Hintergrund
ThemeDarkBackground = "#000000";
ThemeLightBackground = "#eff1d0";

// Seite - Normaler Text
ThemeDarkText = "#ffffff";
ThemeLightText = "#000000";

// Seite - Überschriften
ThemeDarkTitle = "#6aaa4b";
ThemeLightTitle = "#355525";

// Besonderheiten
ThemeLightExtra = "#22aacc";
ThemeDarkExtra = "#ffccaa";


// Theme - Name
ThemeDarkName = "Dunkel";
ThemeLightName = "Hell";


// 
// Get the document element
// 
doc_element = document.documentElement;

// 
// The functions
// 

// The function to change to the light Theme
function toLight() {
    doc_element.style.setProperty('--body-background-color', ThemeLightBackground);
    doc_element.style.setProperty('--nav-background-color', ThemeLightNavBackground);
    doc_element.style.setProperty('--text-color', ThemeLightText);
    doc_element.style.setProperty('--title-color', ThemeLightTitle);
    doc_element.style.setProperty('--nav-text-color', ThemeLightNavText);
    doc_element.style.setProperty('--extra-color', ThemeLightExtra);
    document.getElementById("themeToggleButton").innerHTML = ThemeLightName;
}


// The function to change to the dark theme
function toDark() {
    doc_element.style.setProperty('--body-background-color', ThemeDarkBackground);
    doc_element.style.setProperty('--nav-background-color', ThemeDarkNavBackground);
    doc_element.style.setProperty('--text-color', ThemeDarkText);
    doc_element.style.setProperty('--title-color', ThemeDarkTitle);
    doc_element.style.setProperty('--nav-text-color', ThemeDarkNavText);
    doc_element.style.setProperty('--extra-color', ThemeDarkExtra);
    document.getElementById("themeToggleButton").innerHTML = ThemeDarkName;
}

// Die funktion, die beim ersten mal laden der Website ausgeführt wird
function initializeTheme() {
    // Überprüfen, ob Theme-Speicher vorhanden ist
    if (!localStorage.getItem("theme")) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            toDark();
            localStorage.setItem("theme", "dark");
        } else {
            toLight();
            localStorage.setItem("theme", "light");
        }
    }
}

// Funktion einmal zum Start ausführen
initializeTheme();

// Die funktion, die beim aufrufen der Website automatisch gestartet wird
function startTheme() {

    // Aktuelles Theme abrufen
    try {
        theme = localStorage.getItem("theme");
    } catch (e) {
        if (e.name == "NS_ERROR_FILE_CORRUPTED") {
            localStorage.clear();
            theme = localStorage.getItem("theme");
        }
    }
    //Theme auf gespeichertes Theme setzen
    if (theme == "light") {

        // Theme ändern
        toLight();
    } else {

        // Theme ändern
        toDark();
    }
}

// Funktion einmal zum Start ausführen
startTheme();



// Funktion, die bei Knopfdruck ausgeführt wird
function toggleTheme() {

    // Aktuelles Theme abrufen
    try {
        theme = localStorage.getItem("theme");
    } catch (e) {
        if (e.name == "NS_ERROR_FILE_CORRUPTED") {
            localStorage.clear();
            theme = localStorage.getItem("theme");
        }
    }

    // Theme basierend auf Aktuellem theme ändern
    if (theme == "dark") {

        // Theme ändern
        toLight();

        // Theme-Speicher auf "Hell" setzen
        localStorage.setItem("theme", "light");
    } else {

        // Theme ändern
        toDark();

        // Theme-Speicher auf "Dunkel" setzen
        localStorage.setItem("theme", "dark");
    }
}