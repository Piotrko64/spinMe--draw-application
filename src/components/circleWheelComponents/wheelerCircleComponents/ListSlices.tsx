import { CircleSettings, OneSlice } from "../../../@types/CircleSettings";
import { useCircleSettings } from "../../../store/useCircleSettings";
import { SliceCircle } from "./SliceCircle";

export function ListSlices({
    correctArray,
    correctAngle,
}: {
    correctArray: Array<OneSlice>;
    correctAngle: number;
}) {
    return (
        <div>
            {correctArray.map(({ color, title, id }, index) => (
                <SliceCircle color={color} index={index} angle={correctAngle} key={id} />
            ))}
        </div>
    );
}
