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

            <div className={classes.position}>
                <AnimatePresence exitBeforeEnter>
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
                            duration: 0.12,
                            type: "spring",
                            damping: 4,
                            mass: 0.35,
                            stiffness: 50,
                            delay: 0,
                        }}
                        initial={{ scale: 0 }}
                    >
                        <div className={classes.modal}>{children}</div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
}
