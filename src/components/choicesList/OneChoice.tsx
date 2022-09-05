import classes from "./oneChoice.module.css";

export function OneChoice({ title }: { title: string }) {
    return (
        <div className={classes.oneChoice}>
            <div className={classes.dragDots}>
                {[...Array(6).keys()].map(() => (
                    <div className={classes.dot}></div>
                ))}
            </div>
            {title}
        </div>
    );
}
