import { useCircleSettings } from "../../store/useCircleSettings";
import { BaseButton } from "../../ui/BaseButton/BaseButton";
import { BaseModal } from "../../ui/BaseModal/BaseModal";

export function ModalWinner() {
    const titleWinner = useCircleSettings((state) => state.winnerTitle);
    const toggleOpenModalWinner = useCircleSettings((state) => state.toggleOpenModalWinner);

    return (
        <BaseModal>
            <h2>The Winner Is..</h2>
            <p>{titleWinner}</p>
            <BaseButton color="#cdcdcd" title="close" action={() => toggleOpenModalWinner(false)} />
        </BaseModal>
    );
}
