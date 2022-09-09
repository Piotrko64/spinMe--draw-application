import { useEffect } from "react";
import { config } from "../../config";
import { randomNumber } from "../../utils/randomNumber";
import { useCircleSettings } from "./../../store/useCircleSettings";
export function useKeyboardToSpin() {
    const {
        updateAngle,
        currentAngle,
        toggleOpenModalModes,
        toggleOpenModalWinner,
        isActiveModalModes,
        isActiveModalWinner,
    } = useCircleSettings((state) => state);

    function handlePressKey(e: KeyboardEvent) {
        if (e.key === "Enter") {
            e.preventDefault();
            toggleOpenModalModes(false);
            toggleOpenModalWinner(false);
            if (isActiveModalModes || isActiveModalWinner) {
                return;
            }
            const randomAngle = randomNumber(config.MIN_VALUE_SPIN, config.MAX_VALUE_SPIN);
            updateAngle(currentAngle + randomAngle);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handlePressKey);
        return () => window.removeEventListener("keydown", handlePressKey);
    }, [currentAngle, isActiveModalModes, isActiveModalWinner]);
}
