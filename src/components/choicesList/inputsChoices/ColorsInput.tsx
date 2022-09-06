import { useRef, useState } from "react";
import { BlockPicker } from "react-color";
import classes from "./colorInput.module.css";

export function ColorsInput({ color }: { color: string }) {
    const [open, setOpen] = useState(false);
    const input = useRef<HTMLDivElement>(null);
    console.log(color);

    function handleOpenState() {
        setOpen(true);
        input.current!.focus();
    }

    function handleCloseState() {
        setOpen(false);
    }

    return (
        <>
            <div
                className={classes.input}
                onClick={handleOpenState}
                onBlur={handleCloseState}
                tabIndex={0}
                ref={input}
            >
                <div className={classes.blockPicker}>{open && <BlockPicker color={color} />}</div>
            </div>
        </>
    );
}
