import { useCircleSettings } from "../../../store/useCircleSettings";
import { ListSlices } from "./ListSlices";
import { v4 } from "uuid";
import classes from "./theCircle.module.css";
import { useHandleModalWinner } from "../../../hooks/modal/useHandleModalWinner";

export function TheCircle() {
    const { currentAngle, slices, mode } = useCircleSettings((state) => state);

    const { toggleModalActive, changeTitleWinner } = useHandleModalWinner();

    const angleForSlice = 360 / (slices.length * mode);
    const correctArraySlices = Array(mode)
        .fill(slices)
        .flat()
        .map((slice) => ({ ...slice, id: v4() }));

    const arrayRange = Array(mode * slices.length)
        .fill(0)
        .map((_el, index) => (index + 1) * angleForSlice);

    const remainderOfDivision = currentAngle % 360;

    const findIndexRange = arrayRange.findIndex((range) => remainderOfDivision <= range);

    return (
        <div className={classes.container}>
            <div
                className={classes.circle}
                style={{ transform: `rotate(${-currentAngle}deg)` }}
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
