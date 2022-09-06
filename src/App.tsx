import classes from "./App.module.css";
import { ActionButtons } from "./components/buttonsUnderCircle/ActionsButton";
import { CanvasContainer } from "./components/canvas/CanvasContainer";
import { ChoicesList } from "./components/choicesList/ChoicesList";
import { CircleWheelEntireComponent } from "./components/circleWheelComponents/CircleWheelEntireComponent";

function App() {
    return (
        <div className={classes.app}>
            <CanvasContainer>
                <CircleWheelEntireComponent />
                <ActionButtons />
                <ChoicesList />
            </CanvasContainer>
        </div>
    );
}

export default App;
