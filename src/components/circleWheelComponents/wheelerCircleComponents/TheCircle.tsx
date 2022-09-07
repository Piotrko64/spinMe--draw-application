import { useCircleSettings } from "../../../store/useCircleSettings";
import { ListSlices } from "./ListSlices";
import { v4 } from "uuid";
import classes from "./theCircle.module.css";
import { useHandleModalWinner } from "../../../hooks/modal/useHandleModalWinner";

export function TheCircle() {
    const { currentAngle, slices, mode } = useCircleSettings((state) => state);

    const { toggleModalActive, changeTitleWinner } = useHandleModalWinner();

    const correctSlicesLength = slices.filter((slice) => slice.title.trim()).length;

    const angleForSlice = 360 / (correctSlicesLength * mode);

    const correctArraySlices = Array(mode)
        .fill(slices)
        .flat()
        .map((slice) => ({ ...slice, id: v4() }))
        .filter((slice) => slice.title.trim());

    const arrayRange = Array(mode * correctSlicesLength)
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
