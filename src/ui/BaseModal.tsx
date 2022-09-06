import { motion } from "framer-motion";
import { ChildrenProps } from "../@types/ChildrenProps";
import classes from "./baseModal.module.css";

export function BaseModal({ children }: ChildrenProps) {
    return (
        <>
            <div className={classes.modalBackground}></div>
            <div className={classes.position}>
                <motion.div
                    layout
                    animate={{ scale: 1 }}
                    exit={{
                        y: -50,
                        opacity: 0,
                        scale: 2,
                    }}
                    transition={{
                        duration: 0.35,
                        type: "spring",
                        damping: 3,
                        mass: 0.75,
                        stiffness: 50,
                        delay: 0.2,
                    }}
                    initial={{ scale: 0 }}
                >
                    <div className={classes.modal}>{children}</div>
                </motion.div>
            </div>
        </>
    );
}
