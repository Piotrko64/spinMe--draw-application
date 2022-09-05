import classes from "./App.module.css";
import { CanvasContainer } from "./components/canvas/CanvasContainer";
import { CircleWheelEntireComponent } from "./components/circleWheelComponents/CircleWheelEntireComponent";

function App() {
    return (
        <div className={classes.app}>
            <CanvasContainer>
                <CircleWheelEntireComponent />
            </CanvasContainer>
        </div>
    );
}

export default App;
