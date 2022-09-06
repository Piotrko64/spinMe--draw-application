import { useCircleSettings } from "../../store/useCircleSettings";
import { ModalWinner } from "./ModalWinner";

export function ManageModals() {
    const openModalWinner = useCircleSettings((state) => state.activeModalWinner);
    return <>{openModalWinner && <ModalWinner />}</>;
}
