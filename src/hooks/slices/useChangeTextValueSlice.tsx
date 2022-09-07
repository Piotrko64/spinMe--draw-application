import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { useFindSlice } from "./useFindSlice";

export function useChangeTextValueSlice(id: string) {
    const { findIndex } = useFindSlice(id);
    const { slices, updateAllSlices } = useCircleSettings((state: CircleSettings) => state);

    function changeValueText(textValue: string) {
        const cloneSlices = [...slices];

        cloneSlices[findIndex].title = textValue;

        updateAllSlices(cloneSlices);
    }
    return changeValueText;
}
