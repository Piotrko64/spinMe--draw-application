import classes from "./sliceCircle.module.css";
export function SliceCircle({ color, angle, index }: { color: string; angle: number; index: number }) {
    const stylesSlice = {
        background: `conic-gradient(${color} 0deg, ${color} ${angle}deg, transparent ${angle}deg, transparent 360deg)`,
        transform: `rotate(${index * angle}deg)`,
    };

    return <div className={classes.slice} style={stylesSlice}></div>;
}
