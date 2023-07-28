import {colors} from "../js/functions.js";

describe("colors", () => {

    it("Returns correct colors for click count within array length", () => {
        const returnedColors = [];
        for (const color of colors){
            returnedColors.push(color);
            if (returnedColors.length === colors.data.length){
                break;
            }
        }
        expect(returnedColors).toEqual(colors.data);
    });

    it("Returns correct color for click count outside array length", () => {
        let returnedColor;
        const clicks = colors.data.length + 5;

        for (let i = 0; i < clicks; i++){
            returnedColor = colors.next('text1').value;
        }

        expect(returnedColor).toBe(colors.data[clicks % colors.data.length]);
    });
});