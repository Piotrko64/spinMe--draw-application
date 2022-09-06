import { randomNumber } from "../../../utils/randomNumber";

const RGBNUMBERS = "247,205,77";

export function newCircle(ctx: CanvasRenderingContext2D, coordinateX: number, coordinateY: number) {
    const speedX = randomNumber(-2, 4);
    const speedY = randomNumber(-1, 2);

    let xCoordinate = coordinateX;
    let yCoordinate = coordinateY;
    let size = randomNumber(1, 34);
    let opacity = randomNumber(15, 100) / 100;

    return {
        update() {
            xCoordinate += speedX;
            yCoordinate += speedY;
            if (size >= 0.2) {
                size -= 0.15;
                opacity -= 0.002;
            }
        },
        draw() {
            ctx.fillStyle = `rgba(${RGBNUMBERS}, ${opacity})`;
            ctx.beginPath();
            ctx.arc(xCoordinate, yCoordinate, size, 0, Math.PI * 2);
            ctx.fill();
        },
        size() {
            return size;
        },
    };
}
