import { useState } from "react";

export default function Checkbox({ label, icon, checked = false, onChange }) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (onChange) {
            onChange(!isChecked);
        }
    };

    return (
        <div className="gi-sidebar-block-item py-[15px] relative flex flex-row items-center">
            <input
                type="checkbox"
                id="customCheckbox"
                className="peer hidden"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label
                htmlFor="customCheckbox"
                className="w-full text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
            >
                <span className="flex">
                    {icon && (
                        <span className="w-[20px] h-[20px] mr-[7px] text-[17px]">
                            {icon}
                        </span>
                    )}
                    {label}
                </span>
            </label>
            <span
                className={`absolute top-[50%] left-[0] h-[18px] w-[18px] bg-white border border-solid border-[#eee] transition-all duration-300 translate-y-[-50%] rounded-[5px] flex items-center justify-center 
                peer-checked:border-[#5caf90] peer-checked:bg-[#5caf90]`}
            >
                <svg
                    className={`w-[12px] h-[12px] text-white ${
                        isChecked ? "block" : "hidden"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.78 4.22a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0L3.22 7.28a.75.75 0 1 1 1.06-1.06L7 8.94l4.72-4.72a.75.75 0 0 1 1.06 0z"
                    />
                </svg>
            </span>
        </div>
    );
}
