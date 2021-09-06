# themes.js

Eine einfache Möglichkeit Themes auf einer Website einzubinden  

## Features  
- EIN Knopfdruck -> Große veränderung
- Speichern über Seitenaufrufe hinweg

## Einbinden
1. Lade dir die "themes.js"-Datei herunter
2. Füge an das ende des "body-bereichs" deiner website folgenden code ein
```
<script src="./themes.js"></script>
```
3. Füge am anfang des "body-bereichs" deiner Website folgenden Code ein:
```
<div id="themeButton">
    <button id="themeToggleButton" onclick="toggleTheme()">Darkmode/Lightmode</button>
</div>
```

Fertig

## Optional
### Übergang
Wenn du einen übergang willst, füge folgenden CSS-snippet in deiner CSS-Datei ein:
```
body{
    transition: 0.5s;
}
```

## Beispiel-Design  
Als Designbeispiel für den Light/Dark-theme-Knopf habe ich folgenden css-schnipsel:
```
#themeToggleButton{
    color: var(--font-color);
    background: var(--color-primary);
    padding: 10px 20px;
    border-radius: 5px;
}
#themeButton{
    position: fixed;
    top: 10px;
    right: 10px;
}
```
