import { v4 } from "uuid";
import create from "zustand";
import { CircleSettings, ModesSlice, OneSlice } from "../../@types/CircleSettings";

export const useCircleSettings = create<CircleSettings>((set) => ({
    mode: 1,
    slices: [
        { title: "banana", color: "yellow", id: v4() },
        { title: "strawberry", color: "red", id: v4() },
    ],
    changeMode: (newMode: ModesSlice) => set(() => ({ mode: newMode })),
    updateAllSlices: (newState: Array<OneSlice>) => set(() => ({ slices: newState })),
    changeById: (newText: string) => set(() => ({})),
}));
