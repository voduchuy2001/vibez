import React, { useEffect, useState } from "react";

export default function Overlay() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            id="gi-overlay"
            className="w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-[#fff] z-[99] flex items-center justify-center overflow-hidden"
        >
            <div className="loader"></div>
        </div>
    );
}
