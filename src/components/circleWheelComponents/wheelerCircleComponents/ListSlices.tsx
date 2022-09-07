import { OneSlice } from "../../../@types/CircleSettings";
import { SliceCircle } from "./SliceCircle";

interface CorrectArrayAndAngle {
    correctArray: Array<OneSlice>;
    correctAngle: number;
}

export function ListSlices({ correctArray, correctAngle }: CorrectArrayAndAngle) {
    return (
        <>
            {correctArray.map(({ color, id }, index) => (
                <SliceCircle color={color} index={index} angle={correctAngle} key={id} />
            ))}
        </>
    );
}
