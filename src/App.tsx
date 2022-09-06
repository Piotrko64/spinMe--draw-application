import classes from "./App.module.css";
import { ActionButtons } from "./components/buttonsUnderCircle/ActionsButton";
import { CanvasContainer } from "./components/canvas/CanvasContainer";
import { ChoicesList } from "./components/choicesList/ChoicesList";
import { CircleWheelEntireComponent } from "./components/circleWheelComponents/CircleWheelEntireComponent";
import { useCircleSettings } from "./store/useCircleSettings";
import { ModalWinner } from "./ui/ModalWinner";

function App() {
    const openModalWinner = useCircleSettings((state) => state.activeModal);

    return (
        <div className={classes.app}>
            <CanvasContainer>
                <CircleWheelEntireComponent />
                <ActionButtons />
                <ChoicesList />
                {openModalWinner && <ModalWinner />}
            </CanvasContainer>
        </div>
    );
}

export default App;
