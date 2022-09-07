export type ModesSlice = 1 | 2 | 3;
export type OneSlice = { title: string; color: string; id: string };

export interface CircleSettings {
    mode: ModesSlice;
    slices: Array<OneSlice>;
    currentAngle: number;
    activeModalWinner: boolean;
    winnerTitle: string;
    activeModalModes: boolean;
    changeMode: (num: ModesSlice) => void;
    updateAllSlices: (state: Array<OneSlice>) => void;
    updateAngle: (num: number) => void;
    toggleOpenModalWinner: () => void;
    toggleOpenModalModes: () => void;
    setWinner: (title: string) => void;
}
