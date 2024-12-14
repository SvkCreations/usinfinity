import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 700) {
            setVisible(true);
        } else if (scrolled <= 700) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div className='d-felx justify-content-end'>
            <button onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }} className='btn secondary-btn scroll shadow-lg'><Icon icon='flowbite:angle-top-solid' height='28px' width='28px'></Icon></button>
        </div>
    )
}
