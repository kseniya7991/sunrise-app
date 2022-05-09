import React, { useEffect, useRef } from "react";
import "./Sun.scss";

function Sun({ probability }) {
    /*    const bar = useRef(null); */

    /*   useEffect(() => {
        if (probability) {
            const value = (probability / 100) * 125.6;
            bar.current.setAttribute(
                "stroke-dasharray",
                ` ${value}, ${125.6 + 125.6 - value}`
            );
            bar.current.style.opacity = 1;
            console.log(probability);
        }
    }, [probability]); */
    return (
        /* <div className="Sun__block">
            <svg id="animated" viewBox="0 0 100 100" className="Sun__bar-block">
                <circle cx="50" cy="50" r="45" fill="transparent" />
                <path
                    className="Sun__bar"
                    ref={bar}
                    strokeDasharray="0, 251.2"
                    id="progress"
                    strokeLinecap="square"
                    strokeWidth="5"
                    stroke="#FFDAA3"
                    fill="none"
                    d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"
                ></path>
            </svg>
            <div className="Sun__circle">
                <span
                    className={probability ? "Sun__text active" : "Sun__text"}
                >
                    {probability ? probability : ""}
                </span>
            </div>
        </div> */
        <div className="Sun__wrap">
            <div className="Sun__block2"></div>
            <div className="Sun__circle2"></div>
        </div>
    );
}

export default Sun;
