export type ModesSlice = 1 | 2 | 3;
export type OneSlice = { title: string; color: string; id: string };

export interface CircleSettings {
    mode: ModesSlice;
    slices: Array<OneSlice>;
    currentAngle: number;
    activeModal: Boolean;
    changeMode: (num: ModesSlice) => void;
    updateAllSlices: (state: Array<OneSlice>) => void;
    updateAngle: (num: number) => void;
    toggleOpenModal: (state: CircleSettings) => void;
}
