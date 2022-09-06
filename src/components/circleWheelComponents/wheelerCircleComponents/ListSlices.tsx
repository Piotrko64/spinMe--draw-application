import { OneSlice } from "../../../@types/CircleSettings";
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
            {correctArray.map(({ color, id }, index) => (
                <SliceCircle color={color} index={index} angle={correctAngle} key={id} />
            ))}
        </div>
    );
}
