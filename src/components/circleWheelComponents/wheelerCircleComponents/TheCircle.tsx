import { CircleSettings } from "../../../@types/CircleSettings";
import { useCircleSettings } from "../../../store/useCircleSettings";
import { ListSlices } from "./ListSlices";
import { v4 } from "uuid";
import classes from "./theCircle.module.css";
import { useHandleModalWinner } from "../../../hooks/modal/useHandleModalWinner";

export function TheCircle() {
    const actualRotate = useCircleSettings((state) => state.currentAngle);
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);
    const modeSlices = useCircleSettings((state: CircleSettings) => state.mode);

    const { toggleModalActive, changeTitleWinner } = useHandleModalWinner();

    const angleForSlice = 360 / (listSlices.length * modeSlices);
    const correctArraySlices = Array(modeSlices)
        .fill(listSlices)
        .flat()
        .map((slice) => ({ ...slice, id: v4() }));

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
                onTransitionEnd={() => {
                    toggleModalActive(true);
                    changeTitleWinner(correctArraySlices[findIndexRange].title);
                }}
            >
                <ListSlices correctArray={correctArraySlices} correctAngle={angleForSlice} />
            </div>
        </div>
    );
}
