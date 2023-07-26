import React, { useState } from "react";
import '../Collapse/Collapse.scss'

const Collapse = ({ title, children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const stateToggle = () => {
        setIsOpen(!isOpen);
    }

    
    return (
        //Collapse recoit les props title et children que l'on defini dans about
        <div className={`collapse ${isOpen ? "collapse-open" : ""}`}>
                <h2 className="collapse_title"> {title} </h2>
                <span onClick={stateToggle} className={`collapse_arrow ${isOpen ? "collapse_arrow-up" : "collapse_arrow-down"}`}></span>
                {isOpen && 
                <div className="collapse_children"> 
                {children} 
                </div>}
        </div>
    )

};

export default Collapse