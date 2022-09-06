import { v4 } from "uuid";
import create from "zustand";
import { CircleSettings, ModesSlice, OneSlice } from "../@types/CircleSettings";

export const useCircleSettings = create<CircleSettings>((set) => ({
    mode: 2,
    currentAngle: 0,
    activeModalWinner: false,
    winnerTitle: "",
    slices: [
        { title: "Pizza 🍕🍕🍕", color: "#F55D3E", id: v4() },
        { title: "🌯Burrito🌯", color: "#76BED0", id: v4() },
        { title: "🍦Ice Cream🍦", color: "#576CA8", id: v4() },
    ],
    changeMode: (newMode: ModesSlice) => set(() => ({ mode: newMode })),
    updateAllSlices: (newState: Array<OneSlice>) => set(() => ({ slices: newState })),
    updateAngle: (angle: number) => set(() => ({ currentAngle: angle })),
    toggleOpenModalWinner: () => set((state) => ({ activeModalWinner: !state.activeModalWinner })),
    setWinner: (title: string) => set(() => ({ winnerTitle: title })),
}));
