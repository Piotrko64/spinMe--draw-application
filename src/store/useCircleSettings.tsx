import create from "zustand";
import { CircleSettings, ModesSlice, OneSlice } from "../../@types/CircleSettings";

export const useCircleSettings = create<CircleSettings>((set) => ({
    mode: 1,
    slices: [
        { title: "banana", color: "red" },
        { title: "strawberry", color: "blue" },
    ],
    changeMode: (newMode: ModesSlice) => set(() => ({ mode: newMode })),
    updateAllSlices: (newState: Array<OneSlice>) => set(() => ({ slices: newState })),
}));
