import { CircleSettings } from "../../../@types/CircleSettings";
import { useCircleSettings } from "../../../store/useCircleSettings";
import { ListSlices } from "./ListSlices";
import { v4 } from "uuid";
import classes from "./theCircle.module.css";

export function TheCircle() {
    const actualRotate = useCircleSettings((state) => state.currentAngle);

    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);
    const modeSlices = useCircleSettings((state: CircleSettings) => state.mode);

    const angleForSlice = 360 / (listSlices.length * modeSlices);
    const correctArraySlices = Array(modeSlices)
        .fill(listSlices.map((slice) => ({ ...slice, id: v4() })))
        .flat();

    const arrayRange = Array(modeSlices * listSlices.length)
        .fill(0)
        .map((_el, index) => (index + 1) * angleForSlice);

    const remainderOfDivision = actualRotate % 360;

    const findIndexRange = arrayRange.findIndex((range) => remainderOfDivision <= range);

    return (
        <div className={classes.container}>
            <div
                className={classes.circle}
                style={{ transform: `rotate(${-actualRotate}deg)` }}
                onTransitionEnd={() => alert(correctArraySlices[findIndexRange].title)}
            >
                <ListSlices correctArray={correctArraySlices} correctAngle={angleForSlice} />
            </div>
        </div>
    );
}
