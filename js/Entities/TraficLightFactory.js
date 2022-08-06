import { Light } from "./Light.js";
import { TraficLight } from "./TraficLight.js";
import { Color } from "./Color.js";
export class TraficLightFactory {
    constructor() { }
    create() {
        let redLight = new Light(new Color(40, 20, 60, 0), new Color(245, 0, 100, 0));
        let yellowLight = new Light(new Color(40, 40, 60, 0), new Color(200, 100, 20, 0));
        let greenLight = new Light(new Color(20, 40, 60, 0), new Color(0, 195, 40, 1));
        return new TraficLight(redLight, yellowLight, greenLight, 0, 1000);
    }
}
//# sourceMappingURL=TraficLightFactory.js.map