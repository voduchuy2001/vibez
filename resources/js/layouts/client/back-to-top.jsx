import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-[30px] right-[30px] w-[40px] h-[40px] bg-[#4b5966] text-white text-center rounded-[4px] border border-solid border-white transition-all duration-300 ease-in-out hover:bg-black z-50
            ${visible ? "opacity-100 visible" : "opacity-0 invisible"}
            max-[767px]:bottom-[15px] max-[767px]:right-[15px]`}
        >
            ⬆
        </button>
    );
}
