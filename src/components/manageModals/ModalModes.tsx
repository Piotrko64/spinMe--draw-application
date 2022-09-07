import { ModesSlice } from "../../@types/CircleSettings";
import { buttonsModeData } from "../../data/buttonsModeData";
import { useCircleSettings } from "../../store/useCircleSettings";
import { BaseButton } from "../../ui/BaseButton/BaseButton";
import { BaseModal } from "../../ui/BaseModal/BaseModal";
import classes from "./modalModes.module.css";

export function ModalModes() {
    const mode = useCircleSettings((state) => state.mode);
    const changeMode = useCircleSettings((state) => state.changeMode);
    const toggleActiveModalMode = useCircleSettings((state) => state.toggleOpenModalModes);

    return (
        <BaseModal>
            <h2>Choose amount of slice</h2>
            <div className={classes.buttons}>
                {buttonsModeData.map(({ amountSliceInWords, amountSlicesForOneChoice }) => (
                    <BaseButton
                        key={amountSliceInWords}
                        title={`${amountSliceInWords} ${
                            amountSlicesForOneChoice > 1 ? "slices" : "slice"
                        } for one choice`}
                        color={mode === amountSlicesForOneChoice ? "var(--favColor)" : "#e7dcce"}
                        action={() => changeMode(amountSlicesForOneChoice as ModesSlice)}
                    />
                ))}
            </div>
            <BaseButton color={"#cdcdcd"} action={toggleActiveModalMode} title={"close"} />
        </BaseModal>
    );
}
