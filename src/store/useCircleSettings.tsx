import { v4 } from "uuid";
import create from "zustand";
import { CircleSettings, ModesSlice, OneSlice } from "../@types/CircleSettings";

export const useCircleSettings = create<CircleSettings>((set) => ({
    mode: 2,
    currentAngle: 0,
    activeModal: false,
    slices: [
        { title: "banana", color: "#F55D3E", id: v4() },
        { title: "strawberry2", color: "#76BED0", id: v4() },
        { title: "strawberry", color: "#576CA8", id: v4() },
    ],
    changeMode: (newMode: ModesSlice) => set(() => ({ mode: newMode })),
    updateAllSlices: (newState: Array<OneSlice>) => set(() => ({ slices: newState })),
    updateAngle: (angle: number) => set(() => ({ currentAngle: angle })),
    toggleOpenModal: () => set((state: CircleSettings) => ({ activeModal: !state.activeModal })),
}));
