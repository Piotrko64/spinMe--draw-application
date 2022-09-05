import { SliceCircle } from "./SliceCircle";
import classes from "./theCircle.module.css";

export function TheCircle() {
    return (
        <div className={classes.circle}>
            <SliceCircle color="blue" angle={75} index={0} />
        </div>
    );
}
