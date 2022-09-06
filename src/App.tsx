import classes from "./App.module.css";
import { ActionButtons } from "./components/buttonsUnderCircle/ActionsButton";
import { CanvasContainer } from "./components/canvas/CanvasContainer";
import { ChoicesList } from "./components/choicesList/ChoicesList";
import { CircleWheelEntireComponent } from "./components/circleWheelComponents/CircleWheelEntireComponent";
import { ManageModals } from "./components/manageModals/ManageModals";

function App() {
    return (
        <div className={classes.app}>
            <CanvasContainer>
                <CircleWheelEntireComponent />
                <ActionButtons />
                <ChoicesList />
                <ManageModals />
            </CanvasContainer>
        </div>
    );
}

export default App;
