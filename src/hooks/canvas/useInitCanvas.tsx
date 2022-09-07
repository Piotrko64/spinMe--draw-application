import { saveCoordinates } from "./helpers/saveCoordinates";
import { updateCanvasSize } from "./helpers/updateCanvasSize";
import { CircleArrayType } from "../../@types/CircleArrayType";
import { handleCircles } from "./helpers/handleCircles";
import { newCircle } from "./helpers/newCircle";

export function useInitCanvas() {
    function animateCanvas(canvasElement: HTMLCanvasElement) {
        const ctx = canvasElement.getContext("2d")!;
        if (!ctx) return;
        const arrayCircle: CircleArrayType = [];

        let [xCoordinate, yCoordinate]: [number, number] = [0, 0];

        updateCanvasSize(canvasElement);

        window.addEventListener("mousemove", function (event) {
            [xCoordinate, yCoordinate] = saveCoordinates(event);
            init();
        });

        function init() {
            for (let i = 0; i < 1; i++) {
                arrayCircle.push(newCircle(ctx, xCoordinate, yCoordinate));
            }
        }

        function animate() {
            ctx.fillStyle = "rgba(247,185,77,0.5)";
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
            handleCircles(arrayCircle);
            requestAnimationFrame(animate);
        }
        animate();
    }

    return { animateCanvas };
}
