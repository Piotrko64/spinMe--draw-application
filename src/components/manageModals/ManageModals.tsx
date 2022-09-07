import { useCircleSettings } from "../../store/useCircleSettings";
import { ModalModes } from "./ModalModes";
import { ModalWinner } from "./ModalWinner";

export function ManageModals() {
    const isOpenModalWinner = useCircleSettings((state) => state.isActiveModalWinner);
    const isOpenModalModes = useCircleSettings((state) => state.isActiveModalModes);
    return (
        <>
            {isOpenModalWinner && <ModalWinner />}
            {isOpenModalModes && <ModalModes />}
        </>
    );
}
