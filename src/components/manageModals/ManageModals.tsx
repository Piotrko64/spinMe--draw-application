import { useCircleSettings } from "../../store/useCircleSettings";
import { ModalModes } from "./ModalModes";
import { ModalWinner } from "./ModalWinner";

export function ManageModals() {
    const isOpenModalWinner = useCircleSettings((state) => state.activeModalWinner);
    const isOpenModalModes = useCircleSettings((state) => state.activeModalModes);
    return (
        <>
            {isOpenModalWinner && <ModalWinner />}
            {isOpenModalModes && <ModalModes />}
        </>
    );
}
