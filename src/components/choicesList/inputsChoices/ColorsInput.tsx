import { useRef, useState } from "react";
import { BlockPicker, ColorResult } from "react-color";
import { OneSlice } from "../../../@types/CircleSettings";
import { colorData } from "../../../data/colorData";
import { useChangeColorSlice } from "../../../hooks/slices/useChangeColorSlice";
import classes from "./colorInput.module.css";

export function ColorsInput({ color, id }: Omit<OneSlice, "title">) {
    const [open, setOpen] = useState(false);
    const updateColor = useChangeColorSlice(id);
    const input = useRef<HTMLDivElement>(null);

    function handleOpenState() {
        setOpen(true);
        input.current!.focus();
    }

    function handleCloseState() {
        setOpen(false);
    }

    function changeColor(color: ColorResult) {
        updateColor(color.hex);
    }

    return (
        <>
            <div
                className={classes.input}
                onClick={handleOpenState}
                onBlur={handleCloseState}
                tabIndex={0}
                ref={input}
                style={{ backgroundColor: color }}
            >
                <div className={classes.blockPicker}>
                    {open && <BlockPicker color={color} onChangeComplete={changeColor} colors={colorData} />}
                </div>
            </div>
        </>
    );
}
