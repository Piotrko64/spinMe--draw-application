import create from "zustand";
import { CircleSettings, ModesSlice } from "../../@types/CircleSettings";

export const useCircleSettings = create<CircleSettings>((set) => ({
    mode: 3,
    slices: [
        { title: "banana", color: "red" },
        { title: "strawberry", color: "blue" },
    ],
    changeMode: (newMode: ModesSlice) => set((state: CircleSettings) => ({ mode: newMode })),
}));
