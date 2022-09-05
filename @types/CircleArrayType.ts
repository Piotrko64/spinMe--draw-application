export type CircleType = {
    update(): void;
    draw(): void;
    size(): number;
};

export type CircleArrayType = Array<CircleType>;
