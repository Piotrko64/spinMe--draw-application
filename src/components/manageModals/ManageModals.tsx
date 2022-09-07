import { useCircleSettings } from "../../store/useCircleSettings";
import { ModalModes } from "./ModalModes";
import { ModalWinner } from "./ModalWinner";

export function ManageModals() {
    const { isActiveModalWinner, isActiveModalModes } = useCircleSettings((state) => state);

    return (
        <>
            {isActiveModalWinner && <ModalWinner />}
            {isActiveModalModes && <ModalModes />}
        </>
    );
}
