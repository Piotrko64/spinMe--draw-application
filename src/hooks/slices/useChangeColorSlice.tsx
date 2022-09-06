import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { useFindSliceIndex } from "./useFindSlice";

export function useChangeColorSlice(id: string) {
    const findIndex = useFindSliceIndex(id);
    const updateAllSlices = useCircleSettings((state: CircleSettings) => state.updateAllSlices);
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);

    function changeValueColor(newColor: string) {
        const cloneSlices = [...listSlices];

        cloneSlices[findIndex].color = newColor;

        updateAllSlices(cloneSlices);
    }
    return changeValueColor;
}
