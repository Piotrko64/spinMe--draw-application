import { ButtonActionType } from "../../@types/ButtonActionType";
import classes from "./baseButton.module.css";

export function BaseButton({ title, color, action }: Omit<ButtonActionType, "id">) {
    return (
        <button className={classes.button} style={{ backgroundColor: color }} onClick={action}>
            {title}
        </button>
    );
}
