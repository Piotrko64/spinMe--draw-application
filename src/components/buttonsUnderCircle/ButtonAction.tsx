import { ButtonActionType } from "../../@types/ButtonActionType";
import classes from "./buttonAction.module.css";

export function ButtonAction({ color, title, action, icon }: ButtonActionType) {
    return (
        <>
            <button className={classes.actionButton} style={{ backgroundColor: color }} onClick={action}>
                {title} {icon && <img src={icon} className={classes.icon} />}
            </button>
        </>
    );
}
