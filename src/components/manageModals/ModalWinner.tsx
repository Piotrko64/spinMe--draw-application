import { useCircleSettings } from "../../store/useCircleSettings";
import { BaseModal } from "../../ui/BaseModal";

export function ModalWinner() {
    const titleWinner = useCircleSettings((state) => state.winnerTitle);
    return (
        <BaseModal>
            <h2>The Winner Is..</h2>
            <p>{titleWinner}</p>
        </BaseModal>
    );
}
