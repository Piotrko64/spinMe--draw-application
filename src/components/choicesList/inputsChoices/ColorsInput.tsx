import { useState } from "react";
import { BlockPicker, ColorResult } from "react-color";
import { OneSlice } from "../../../@types/CircleSettings";
import { colorData } from "../../../data/colorData";
import { useChangeColorSlice } from "../../../hooks/slices/useChangeColorSlice";
import classes from "./colorInput.module.css";

export function ColorsInput({ color, id }: Omit<OneSlice, "title">) {
    const [open, setOpen] = useState(false);
    const updateColor = useChangeColorSlice(id);

    function handleOpenState() {
        setOpen(true);
    }

    function handleCloseState() {
        setOpen(false);
    }

    function changeColor(color: ColorResult) {
        updateColor(color.hex);
    }

    return (
        <>
            {open && <div className={classes.back} onClick={handleCloseState}></div>}
            <button className={classes.input} onClick={handleOpenState} style={{ backgroundColor: color }}>
                <div className={classes.blockPicker}>
                    {open && (
                        <div onBlur={handleCloseState}>
                            <BlockPicker color={color} onChangeComplete={changeColor} colors={colorData} />
                        </div>
                    )}
                </div>
            </button>
        </>
    );
}
