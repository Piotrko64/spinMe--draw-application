import { CircleSettings } from "../../../../@types/CircleSettings";
import { useFindSlice } from "../../../hooks/slices/useFindSlice";
import { useCircleSettings } from "../../../store/useCircleSettings";

export function TextInputChoice(id: string) {
    const findSlice = useFindSlice(id);

    return (
        <>
            <input value={findSlice?.title} />
        </>
    );
}
