import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { v4 } from "uuid";
import { colorData } from "../../data/colorData";
import { randomNumber } from "../../utils/randomNumber";
import { config } from "../../config";

export function useAddSlice() {
    const { slices, updateAllSlices } = useCircleSettings((state: CircleSettings) => state);

    function addSlice() {
        if (slices.length >= config.MAX_AMOUNT_SLICE) {
            return;
        }
        const randomColor = colorData[randomNumber(0, colorData.length - 1)];

        updateAllSlices([{ title: "new", color: randomColor, id: v4() }, ...slices]);
    }
    return addSlice;
}
