export class TraficLightElement{
    constructor(){}

    updateColor(light, bulbColor, emitedColor) {
        let lights = document.querySelectorAll('.light');
        let lightsOuters = document.querySelectorAll('.light-outer');

        let bulbColorStyle = `background-color:rgb(${bulbColor.red}, ${bulbColor.green}, ${bulbColor.blue})`;
        let emitedColorStyle = `background: radial-gradient(rgba(${emitedColor.red}, ${emitedColor.green}, ${emitedColor.blue}, ${emitedColor.transparency}) 1%, #0000 60%) `;

        lights[light].setAttribute('style', bulbColorStyle);
        lightsOuters[light].setAttribute('style', emitedColorStyle);
    }
}