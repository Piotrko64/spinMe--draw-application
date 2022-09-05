import { ListSlices } from "./ListSlices";
import { SliceCircle } from "./SliceCircle";
import classes from "./theCircle.module.css";

export function TheCircle() {
    return (
        <div className={classes.container}>
            <div className={classes.circle}>
                <ListSlices />
            </div>
        </div>
    );
}
