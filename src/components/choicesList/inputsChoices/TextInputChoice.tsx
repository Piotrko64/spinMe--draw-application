import { ChangeEvent } from "react";
import { useChangeTextValueSlice } from "../../../hooks/slices/useChangeTextValueSlice";
import { useFindSlice } from "../../../hooks/slices/useFindSlice";
import classes from "./textInput.module.css";

export function TextInputChoice({ id }: { id: string }) {
    const { findSlice } = useFindSlice(id);
    const updateText = useChangeTextValueSlice(id);

    function handleChangeTitleValue(event: ChangeEvent<HTMLInputElement>) {
        updateText(event.target.value);
    }

    return (
        <input
            value={findSlice!.title}
            style={{ borderBottomColor: !findSlice?.title.trim() ? "red" : "var(--favColor)" }}
            onChange={handleChangeTitleValue}
            className={classes.input}
            placeholder={"🚨Write something!🚨"}
        />
    );
}
