import React, { useRef } from "react";
import "../Gallery.css";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Places({ images }) {
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo =
                direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <div className="my-5 py-5">
            <h1 className="fw-bold display-2">Places we've explored</h1>
            <div className="gallery-container">
                <button className="scroll-button left" onClick={() => scroll("left")}>
                <Icon icon="ooui:next-rtl" width="30" height="30" />
                </button>
                <div className="gallery mt-3" ref={scrollRef}>

                    {images.map((image, index) => (
                        <div className="gallery-item" key={index}>
                            <img className="img-fluid" src={image} alt={`Gallery item ${index}`} style={{ objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scroll("right")}>
                <Icon icon="ooui:next-ltr" width="30" height="30" />
                </button>
            </div>
        </div>
    );
};


