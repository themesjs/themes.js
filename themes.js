function themesjs(config) {

    // Check if new
    if (!(this instanceof themesjs)) {
        throw new Error('Themes.js must be called with the new keyword');
    }

    // Get themes
    if (config.themes == null) throw new Error("No themes defined!");
    else this.themes = config.themes;
    let checkThemeValidity = (theme) => {
        if (theme.name == null) throw new Error("Theme name not defined!");
    }
    this.themes.forEach((theme) => checkThemeValidity(theme));

    // Get standarts
    if (config.standarts != null) this.standarts = config.standarts;
    else this.standarts = { no_pref: this.themes[0].name };

    let setTheme = (set_to_theme) => {
        config.themes.forEach((theme) => {
            if (theme.name == set_to_theme) {
                Object.keys(theme).forEach((key) => {
                    if (key != 'name' && key != 'displayName' && key != 'icon') {
                        document.documentElement.style.setProperty('--' + key + '-color', theme[key]);
                    }
                });
                window.setTimeout(() => {
                    document.getElementById("themeswitch").children[0].innerHTML = theme.icon;
                }, 250);
                if (theme.name != "dark") document.querySelectorAll(".platformIcon").forEach((icon) => icon.style.filter = "invert(1) brightness(100)");
                else document.querySelectorAll(".platformIcon").forEach((icon) => icon.style.filter = "brightness(0)");
            }
        });
        let rotation = parseInt((document.getElementById("themeswitch").children[0].style.transform || "rotate(0deg);").replace("rotate(", "").replace("deg);", "").replace("deg)", ""));
        rotation = rotation + 360;
        document.getElementById("themeswitch").children[0].style.transform = "rotate(" + rotation + "deg)";
        localStorage.setItem("theme", set_to_theme);
    }
    let initTheme = () => {
        let theme = localStorage.getItem("theme");
        if (theme == null) {
            // Check if system theme is dark
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                theme = config.standart_dark;
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                theme = config.standart_light;
            } else {
                theme = config.standart;
            }
        }
        setTheme(theme);
    }
    let cycleTheme = () => {
        let theme = localStorage.getItem("theme");
        if (theme == null) {
            theme = config.standart;
        }
        let index = config.themes.findIndex((obj) => obj.name == theme);
        if (index == config.themes.length - 1) {
            index = 0;
        } else {
            index++;
        }
        setTheme(config.themes[index].name);
    }
}