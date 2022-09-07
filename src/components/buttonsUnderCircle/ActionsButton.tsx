import { ButtonAction } from "./ButtonAction";
import circle from "../../assets/icons/circle.png";
import setting from "../../assets/icons/settings.png";
import plus from "../../assets/icons/plus.png";
import classes from "./actionButtons.module.css";
import { useCircleSettings } from "../../store/useCircleSettings";
import { randomNumber } from "../../utils/randomNumber";
import { useAddSlice } from "../../hooks/slices/useAddSlice";
import { config } from "../../config";

export function ActionButtons() {
    const { updateAngle, currentAngle, slices, toggleOpenModalModes } = useCircleSettings((state) => state);

    const addSlice = useAddSlice();

    function setRandomAngle() {
        const randomAngle = randomNumber(config.MIN_VALUE_SPIN, config.MAX_VALUE_SPIN);

        updateAngle(currentAngle + randomAngle);
    }

    const isMaxAmount = slices.length >= config.MAX_AMOUNT_SLICE;

    return (
        <div className={classes.buttons}>
            <ButtonAction title="spin the wheel" color="#EB5C59" icon={circle} action={setRandomAngle} />
            <ButtonAction
                title="change mode"
                color="#5C6EA1"
                icon={setting}
                action={() => toggleOpenModalModes(true)}
            />
            <ButtonAction
                title={isMaxAmount ? "Too much!" : "Add Choice"}
                color="#C69E54"
                icon={isMaxAmount ? "" : plus}
                action={addSlice}
            />
        </div>
    );
}
