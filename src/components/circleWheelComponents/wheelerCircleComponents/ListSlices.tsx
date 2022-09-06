import { CircleSettings } from "../../../../@types/CircleSettings";
import { useCircleSettings } from "../../../store/useCircleSettings";
import { SliceCircle } from "./SliceCircle";

export function ListSlices() {
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);
    const modeSlices = useCircleSettings((state: CircleSettings) => state.mode);
    const changeMode = useCircleSettings((state: CircleSettings) => state.changeMode);

    const correctAngle = 360 / (listSlices.length * modeSlices);
    const correctArraySlices = Array(modeSlices).fill(listSlices).flat();

    return (
        <>
            {correctArraySlices.map(({ color, title, id }, index) => (
                <SliceCircle color={color} index={index} angle={correctAngle} key={id} />
            ))}
        </>
    );
}
