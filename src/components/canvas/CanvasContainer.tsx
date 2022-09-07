import { useEffect, useRef } from "react";
import { useInitCanvas } from "../../hooks/canvas/useInitCanvas";
import classes from "./theCanvas.module.css";
import { ChildrenProps } from "../../@types/ChildrenProps";

export function CanvasContainer({ children }: ChildrenProps) {
    const canvas = useRef<HTMLCanvasElement>(null);
    const { animateCanvas } = useInitCanvas();

    useEffect(() => {
        animateCanvas(canvas.current!);
    }, [canvas]);

    return (
        <>
            <canvas className={classes.theCanvas} ref={canvas}></canvas>
            <div className={classes.relative}>{children}</div>
        </>
    );
}
