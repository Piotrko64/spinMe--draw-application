import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { useFindSliceIndex } from "./useFindSlice";

export function useChangeTextValueSlice(id: string) {
    const findIndex = useFindSliceIndex(id);
    const { slices, updateAllSlices } = useCircleSettings((state: CircleSettings) => state);

    function changeValueText(textValue: string) {
        const cloneSlices = [...slices];

        cloneSlices[findIndex].title = textValue;

        updateAllSlices(cloneSlices);
    }
    return changeValueText;
}
