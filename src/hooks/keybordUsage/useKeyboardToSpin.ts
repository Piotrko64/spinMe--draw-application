import { useEffect } from "react";
import { config } from "../../config";
import { randomNumber } from "../../utils/randomNumber";
import { useCircleSettings } from "./../../store/useCircleSettings";
export function useKeyboardToSpin() {
    const updateAngle = useCircleSettings((state) => state.updateAngle);
    const currentAngle = useCircleSettings((state) => state.currentAngle);
    const toggleModalModes = useCircleSettings((state) => state.toggleOpenModalModes);
    const toggleModalWinner = useCircleSettings((state) => state.toggleOpenModalWinner);

    function handlePressSpacebar(e: KeyboardEvent) {
        if (e.key === " ") {
            e.preventDefault();
            toggleModalModes(false);
            toggleModalWinner(false);
            const randomAngle = randomNumber(config.MIN_VALUE_SPIN, config.MAX_VALUE_SPIN);

            updateAngle(currentAngle + randomAngle);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handlePressSpacebar);
        return () => window.removeEventListener("keydown", handlePressSpacebar);
    }, []);
}
