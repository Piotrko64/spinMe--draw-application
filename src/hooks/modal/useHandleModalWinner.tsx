import { useCircleSettings } from "../../store/useCircleSettings";

export function useHandleModalWinner() {
    const setTitle = useCircleSettings((state) => state.setWinner);
    const toggleModalActive = useCircleSettings((state) => state.toggleOpenModalWinner);

    function changeTitleWinner(title: string) {
        setTitle(title);
    }

    return { changeTitleWinner, toggleModalActive };
}
