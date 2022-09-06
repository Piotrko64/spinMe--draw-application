import { ColorsInput } from "./inputsChoices/ColorsInput";
import { TextInputChoice } from "./inputsChoices/TextInputChoice";
import classes from "./oneChoice.module.css";

export function OneChoice({ title, id, color }: { title: string; id: string; color: string }) {
    return (
        <div className={classes.oneChoice}>
            <div className={classes.dragDots}>
                {[...Array(6).keys()].map(() => (
                    <div className={classes.dot}></div>
                ))}
            </div>

            <TextInputChoice id={id} title={title} />
            <ColorsInput color={color} />
        </div>
    );
}
