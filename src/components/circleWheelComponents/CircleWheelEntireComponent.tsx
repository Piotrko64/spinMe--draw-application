import classes from "./circleWheelEntireComponent.module.css";
import { TheCircle } from "./wheelerCircleComponents/TheCircle";

export function CircleWheelEntireComponent() {
    return (
        <main className={classes.container}>
            <TheCircle />
        </main>
    );
}
