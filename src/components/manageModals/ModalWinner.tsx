import { useCircleSettings } from "../../store/useCircleSettings";
import { BaseButton } from "../../ui/BaseButton/BaseButton";
import { BaseModal } from "../../ui/BaseModal/BaseModal";

export function ModalWinner() {
    const { winnerTitle, toggleOpenModalWinner } = useCircleSettings((state) => state);

    return (
        <BaseModal>
            <h2>The Winner Is..</h2>
            <p>{winnerTitle}</p>
            <BaseButton color="#cdcdcd" title="close" action={() => toggleOpenModalWinner(false)} />
        </BaseModal>
    );
}
