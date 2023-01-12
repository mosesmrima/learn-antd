import * as React from "react";
import { useState, useRef } from "react";
import { motion, useDomEvent } from "framer-motion";
import "./App.css"

const transition = {
    type: "spring",
    damping: 25,
    stiffness: 180
};

 const Modal = ({src}) => {
    const [isOpen, setOpen] = useState(false);
    useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

    return (
        <div className={`image-container ${isOpen ? "open" : ""}`}>
            <motion.div
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={transition}
                className="shade"
                onClick={() => setOpen(false)}
            />
            <motion.img
                src={`data:image/jpeg;base64,${src.image}`}
                alt="Bimhuis in Amsterdam"
                onClick={() => setOpen(!isOpen)}
                layout
                transition={transition}
                className={"avatar"}
            />
        </div>
    );
};

export default  Modal