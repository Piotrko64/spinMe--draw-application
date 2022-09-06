import { motion } from "framer-motion";
import { useCircleSettings } from "../store/useCircleSettings";

export function ModalWinner() {
    const titleWinner = useCircleSettings((state) => state.winner);
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            exit={{
                y: -50,
                opacity: 0,
                scale: 2,
            }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 1 }}
        >
            {titleWinner}
        </motion.div>
    );
}
