import { useCircleSettings } from "../../store/useCircleSettings";
import { ColorsInput } from "./inputsChoices/ColorsInput";
import { TextInputChoice } from "./inputsChoices/TextInputChoice";
import classes from "./oneChoice.module.css";

export function OneChoice({ id, color }: { id: string; color: string }) {
    const slices = useCircleSettings((state) => state.slices);
    const updateStateSlices = useCircleSettings((state) => state.updateAllSlices);

    function deleteSlice() {
        const cloneSlices = [...slices];
        updateStateSlices(cloneSlices.filter((slice) => slice.id !== id));
    }

    return (
        <div className={classes.margin}>
            <div className={classes.oneChoice}>
                <div className={classes.dragDots}>
                    {[...Array(6).keys()].map((dot) => (
                        <div className={classes.dot} key={dot}></div>
                    ))}
                </div>

                <TextInputChoice id={id} />
                <ColorsInput color={color} id={id} />
                {slices.length > 2 && (
                    <button className={classes.buttonDelete} onClick={deleteSlice}>
                        X
                    </button>
                )}
            </div>
        </div>
    );
}
