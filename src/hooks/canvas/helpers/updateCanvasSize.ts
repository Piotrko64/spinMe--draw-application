export function updateCanvasSize(canvas: HTMLCanvasElement) {
    const updateSize = (function update() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        return update;
    })();

    window.addEventListener("resize", updateSize);
}
