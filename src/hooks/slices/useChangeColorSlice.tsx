import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { useFindSliceIndex } from "./useFindSlice";

export function useChangeColorSlice(id: string) {
    const findIndex = useFindSliceIndex(id);
    const { slices, updateAllSlices } = useCircleSettings((state: CircleSettings) => state);

    function changeValueColor(newColor: string) {
        const cloneSlices = [...slices];

        cloneSlices[findIndex].color = newColor;

        updateAllSlices(cloneSlices);
    }
    return changeValueColor;
}
