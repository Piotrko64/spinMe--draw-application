import { AnimatePresence, motion } from "framer-motion";
import { ChildrenProps } from "../../@types/ChildrenProps";
import classes from "./baseModal.module.css";

export function BaseModal({ children }: ChildrenProps) {
    return (
        <>
            <motion.div
                layout
                animate={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                initial={{ opacity: 0 }}
            >
                <div className={classes.modalBackground}></div>
            </motion.div>
            <AnimatePresence exitBeforeEnter>
                <div className={classes.position}>
                    <motion.div
                        animate={{ scale: 1 }}
                        exit={{
                            scale: 0,
                            transition: {
                                delay: 1,
                                duration: 5,
                            },
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
            </AnimatePresence>
        </>
    );
}
