import { motion } from "framer-motion";
import { ChildrenProps } from "../@types/ChildrenProps";
import classes from "./baseModal.module.css";

export function BaseModal({ children }: ChildrenProps) {
    return (
        <>
            <motion.div
                layout
                animate={{ opacity: 1 }}
                exit={{
                    y: -50,
                    opacity: 0,
                    scale: 2,
                }}
                transition={{
                    duration: 0.3,
                }}
                initial={{ opacity: 0 }}
            >
                <div className={classes.modalBackground}></div>
            </motion.div>
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
                        duration: 0.22,
                        type: "spring",
                        damping: 3,
                        mass: 0.65,
                        stiffness: 50,
                        delay: 0,
                    }}
                    initial={{ scale: 0 }}
                >
                    <div className={classes.modal}>{children}</div>
                </motion.div>
            </div>
        </>
    );
}
