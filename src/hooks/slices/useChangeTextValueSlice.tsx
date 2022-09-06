import { CircleSettings } from "../../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { useFindSliceIndex } from "./useFindSlice";

export function useChangeTextValueSlice(id: string) {
    const findIndex = useFindSliceIndex(id);
    const updateAllSlices = useCircleSettings((state: CircleSettings) => state.updateAllSlices);
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);

    function changeValueText(textValue: string) {
        const cloneSlices = [...listSlices];

        cloneSlices[findIndex].title = textValue;

        updateAllSlices(cloneSlices);
    }
    return changeValueText;
}
