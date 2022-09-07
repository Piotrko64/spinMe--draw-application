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
    const updateAngle = useCircleSettings((state) => state.updateAngle);
    const currentAngle = useCircleSettings((state) => state.currentAngle);
    const listSlice = useCircleSettings((state) => state.slices);

    const toggleOpenModalMode = useCircleSettings((state) => state.toggleOpenModalModes);
    const addSlice = useAddSlice();

    function setRandomAngle() {
        const randomAngle = randomNumber(config.MIN_VALUE_SPIN, config.MAX_VALUE_SPIN);

        updateAngle(currentAngle + randomAngle);
    }

    return (
        <div className={classes.buttons}>
            <ButtonAction title="spin the wheel" color="#EB5C59" icon={circle} action={setRandomAngle} />
            <ButtonAction
                title="change mode"
                color="#5C6EA1"
                icon={setting}
                action={() => toggleOpenModalMode(true)}
            />
            <ButtonAction
                title={listSlice.length >= config.MAX_AMOUNT_SLICE ? "Too much!" : "Add Choice"}
                color="#C69E54"
                icon={listSlice.length >= config.MAX_AMOUNT_SLICE ? "" : plus}
                action={addSlice}
            />
        </div>
    );
}
