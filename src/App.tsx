import classes from "./App.module.css";
import { ActionButtons } from "./components/buttonsUnderCircle/ActionsButton";
import { CanvasContainer } from "./components/canvas/CanvasContainer";
import { ChoicesList } from "./components/choicesList/ChoicesList";
import { CircleWheelEntireComponent } from "./components/circleWheelComponents/CircleWheelEntireComponent";
import { Footer } from "./components/footer/Footer";
import { ManageModals } from "./components/manageModals/ManageModals";

function App() {
    return (
        <div className={classes.app}>
            <CanvasContainer>
                <div className={classes.mainContent}>
                    <CircleWheelEntireComponent />
                    <ActionButtons />
                    <ChoicesList />
                    <ManageModals />
                </div>
                <Footer />
            </CanvasContainer>
        </div>
    );
}

export default App;
