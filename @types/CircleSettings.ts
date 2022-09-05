export type ModesSlice = 1 | 2 | 3;

export interface CircleSettings {
    mode: ModesSlice;
    slices: Array<{ title: string; color: string }>;
    changeMode: (num: ModesSlice) => void;
}
