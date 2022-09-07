import { ModesSlice } from "../../@types/CircleSettings";
import { buttonsModeData } from "../../data/buttonsModeData";
import { useCircleSettings } from "../../store/useCircleSettings";
import { BaseButton } from "../../ui/BaseButton/BaseButton";
import { BaseModal } from "../../ui/BaseModal/BaseModal";

export function ModalModes() {
    const mode = useCircleSettings((state) => state.mode);
    const changeMode = useCircleSettings((state) => state.changeMode);
    const toggleActiveModalMode = useCircleSettings((state) => state.toggleOpenModalModes);

    return (
        <BaseModal>
            {buttonsModeData.map(({ amountSliceInWords, amountSlicesForOneChoice }) => (
                <BaseButton
                    key={amountSliceInWords}
                    title={`${amountSliceInWords} ${
                        amountSlicesForOneChoice > 1 ? "slices" : "slice"
                    } for one choice`}
                    color={mode === amountSlicesForOneChoice ? "blue" : "yellow"}
                    action={() => changeMode(amountSlicesForOneChoice as ModesSlice)}
                />
            ))}
            <BaseButton color={"red"} action={toggleActiveModalMode} title={"close"} />
        </BaseModal>
    );
}
