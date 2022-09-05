import { CircleSettings } from "../../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";

export function useFindSlice(id: string) {
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);
    const findSlice = listSlices.find((slice) => slice.title === "banana");

    return findSlice;
}
