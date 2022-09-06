import { TextInputChoice } from "./inputsChoices/TextInputChoice";
import classes from "./oneChoice.module.css";

export function OneChoice({ title, id }: { title: string; id: string }) {
    return (
        <div className={classes.oneChoice}>
            <div className={classes.dragDots}>
                {[...Array(6).keys()].map(() => (
                    <div className={classes.dot}></div>
                ))}
            </div>

            <TextInputChoice id={id} title={title} />
        </div>
    );
}
