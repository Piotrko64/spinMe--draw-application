import { ButtonAction } from "./ButtonAction";
import circle from "../../assets/icons/circle.png";
import setting from "../../assets/icons/settings.png";
import classes from "./actionButtons.module.css";
import { useCircleSettings } from "../../store/useCircleSettings";
import { randomNumber } from "../../utils/randomNumber";

export function ActionButtons() {
    const updateAngle = useCircleSettings((state) => state.updateAngle);
    const currentAngle = useCircleSettings((state) => state.currentAngle);

    function setRandomAngle() {
        const randomAngle = randomNumber(760, 1190);
        updateAngle(currentAngle + randomAngle);
    }

    return (
        <div className={classes.buttons}>
            <ButtonAction title="spin the wheel" color="#EB5C59" icon={circle} action={setRandomAngle} />
            <ButtonAction title="change mode" color="#5C6EA1" icon={setting} action={() => {}} />
        </div>
    );
}
