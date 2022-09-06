import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { v4 } from "uuid";
import { colorData } from "../../data/colorData";
import { randomNumber } from "../../utils/randomNumber";

export function useAddSlice() {
    const updateAllSlices = useCircleSettings((state: CircleSettings) => state.updateAllSlices);
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);

    function addSlice() {
        if (listSlices.length > 20) return;
        const randomColor = colorData[randomNumber(0, colorData.length - 1)];

        updateAllSlices([{ title: "new", color: randomColor, id: v4() }, ...listSlices]);
    }
    return addSlice;
}
