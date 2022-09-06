import { useCircleSettings } from "../../store/useCircleSettings";
import { ColorsInput } from "./inputsChoices/ColorsInput";
import { TextInputChoice } from "./inputsChoices/TextInputChoice";
import classes from "./oneChoice.module.css";

export function OneChoice({ title, id, color }: { title: string; id: string; color: string }) {
    const slices = useCircleSettings((state) => state.slices);
    const updateStateSlices = useCircleSettings((state) => state.updateAllSlices);

    function deleteSlice() {
        const cloneSlices = [...slices];
        updateStateSlices(cloneSlices.filter((slice) => slice.id !== id));
    }

    return (
        <div className={classes.oneChoice}>
            <div className={classes.dragDots}>
                {[...Array(6).keys()].map(() => (
                    <div className={classes.dot}></div>
                ))}
            </div>

            <TextInputChoice id={id} title={title} />
            <ColorsInput color={color} id={id} />
            {slices.length > 2 && (
                <button className={classes.buttonDelete} onClick={deleteSlice}>
                    X
                </button>
            )}
        </div>
    );
}
