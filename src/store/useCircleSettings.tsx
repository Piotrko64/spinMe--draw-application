import create from "zustand";
import { CircleSettings, ModesSlice, OneSlice } from "../../@types/CircleSettings";
import { uuid } from "uuidv4";

export const useCircleSettings = create<CircleSettings>((set) => ({
    mode: 1,
    slices: [
        { title: "banana", color: "yellow" },
        { title: "strawberry", color: "red" },
    ],
    changeMode: (newMode: ModesSlice) => set(() => ({ mode: newMode })),
    updateAllSlices: (newState: Array<OneSlice>) => set(() => ({ slices: newState })),
}));
