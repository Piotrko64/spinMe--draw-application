import { config } from "../../../config";
import { randomNumber } from "../../../utils/randomNumber";

const RGBNUMBERS = "247,205,77";

const { MIN_SIZE, MAX_SIZE, MIN_SPEED, MAX_SPEED } = config;

export function newCircle(ctx: CanvasRenderingContext2D, coordinateX: number, coordinateY: number) {
    const speedX = randomNumber(MIN_SPEED, MAX_SPEED);
    const speedY = randomNumber(MIN_SPEED, MAX_SPEED);

    let xCoordinate = coordinateX;
    let yCoordinate = coordinateY;
    let size = randomNumber(MIN_SIZE, MAX_SIZE);
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
