import { v4 } from "uuid";
import create from "zustand";
import { CircleSettings, ModesSlice, OneSlice } from "../@types/CircleSettings";

export const useCircleSettings = create<CircleSettings>((set) => ({
    mode: 2,
    currentAngle: 0,
    isActiveModalWinner: false,
    isActiveModalModes: false,
    winnerTitle: "",
    slices: [
        { title: "Pizza 🍕🍕🍕", color: "#F55D3E", id: v4() },
        { title: "🌯Burrito🌯", color: "#76BED0", id: v4() },
        { title: "🍦Ice Cream🍦", color: "#576CA8", id: v4() },
    ],
    changeMode: (newMode: ModesSlice) => set(() => ({ mode: newMode })),
    updateAllSlices: (newState: Array<OneSlice>) => set(() => ({ slices: newState })),
    updateAngle: (angle: number) => set(() => ({ currentAngle: angle })),
    toggleOpenModalWinner: (boolean: boolean) =>
        set((state) => ({
            isActiveModalWinner:
                state.slices.filter((slice) => slice.title.trim()).length > 1 ? boolean : false,
        })),
    toggleOpenModalModes: (boolean: boolean) => set(() => ({ isActiveModalModes: boolean })),
    setWinner: (title: string) => set(() => ({ winnerTitle: title })),
}));
