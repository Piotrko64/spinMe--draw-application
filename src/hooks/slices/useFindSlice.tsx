import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";

export function useFindSlice(id: string) {
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);
    const findSlice = listSlices.find((slice) => slice.id === id);
    const findIndex = listSlices.findIndex((slice) => slice.id === id);

    return { findSlice, findIndex };
}
