# themes.js

Eine einfache Möglichkeit Themes auf einer Website einzubinden  

## Features  
- EIN Knopfdruck -> Große veränderung
- Speichern über Seitenaufrufe hinweg

## Einbinden
1. Herunterladen :D
2. Am ende des body-Tags einfügen

## Knopf quellcode
```
<div id="themeButton">
    <button id="themeToggleButton" onclick="toggleTheme()">Darkmode/Lightmode</button>
</div>
```

## Kompatibilität
JS | CSS
---|---
1.0.0 | 1.0.0
2.0.0 | 2.0.0



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
