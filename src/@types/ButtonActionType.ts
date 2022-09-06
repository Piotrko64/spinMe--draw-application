import { OneSlice } from "./CircleSettings";
export type ButtonActionType = Omit<OneSlice, "id"> & { action: () => void; icon?: string };
