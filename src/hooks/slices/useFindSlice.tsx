import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";

export function useFindSlice(id: string) {
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);
    const findSlice = listSlices.find((slice) => slice.id === id);

    return findSlice;
}
export function useFindSliceIndex(id: string) {
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);
    const findIndex = listSlices.findIndex((slice) => slice.id === id);

    return findIndex;
}
