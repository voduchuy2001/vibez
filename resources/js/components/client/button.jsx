import React from "react";

export default function Button({
    type = "button",
    name,
    onClick,
    children,
    className = "",
    ...rest
}) {
    return (
        <button
            type={type}
            name={name}
            onClick={onClick}
            className={`gi-btn-2 transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] py-[10px] max-[360px]:py-[3px] px-[15px] max-[360px]:px-[10px] bg-[#5caf90] text-[#fff] border-[0] text-[14px] max-[360px]:text-[13px] tracking-[0] font-medium inline-flex items-center hover:bg-[#4b5966] hover:text-[#fff] ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
