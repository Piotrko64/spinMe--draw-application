import { useChangeTextValueSlice } from "../../../hooks/slices/useChangeTextValueSlice";
import { useFindSlice } from "../../../hooks/slices/useFindSlice";
import classes from "./textInput.module.css";

export function TextInputChoice({ id, title }: { id: string; title: string }) {
    const findSlice = useFindSlice(id);
    const updateText = useChangeTextValueSlice(id);

    function handleChangeTitleValue(e: any) {
        updateText(e.target.value);
    }

    return (
        <>
            <input value={findSlice!.title} onChange={handleChangeTitleValue} className={classes.input} />
        </>
    );
}
