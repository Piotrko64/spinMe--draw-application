import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { useFindSlice } from "./useFindSlice";

export function useChangeColorSlice(id: string) {
    const { findIndex } = useFindSlice(id);
    const { slices, updateAllSlices } = useCircleSettings((state: CircleSettings) => state);

    function changeValueColor(newColor: string) {
        const cloneSlices = [...slices];

        cloneSlices[findIndex].color = newColor;

        updateAllSlices(cloneSlices);
    }
    return changeValueColor;
}
