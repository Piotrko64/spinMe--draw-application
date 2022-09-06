import { CircleArrayType } from "../../../@types/CircleArrayType";

export function handleCircles(arrayCircle: CircleArrayType) {
    for (let i = 0; i < arrayCircle.length; i++) {
        arrayCircle[i].update();
        arrayCircle[i].draw();
        if (arrayCircle[i].size() <= 0.1) {
            arrayCircle.splice(i, 1);
        }
    }
}
