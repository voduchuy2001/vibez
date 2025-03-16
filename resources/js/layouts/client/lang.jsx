import { useEffect, useRef, useState } from "react";

export default function Lang() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="grow-[1] shrink-[0] basis-[0%] hidden min-[992px]:block">
            <div className="header-top-right-inner flex justify-end">
                <a
                    className="gi-help pl-[20px] text-[13px] text-[#777] tracking-[0.7px] font-normal hover:text-[#5caf90]"
                    href="faq.html"
                >
                    Help?
                </a>
                <a
                    className="gi-help pl-[20px] text-[13px] text-[#777] tracking-[0.7px] font-normal hover:text-[#5caf90]"
                    href="track-order.html"
                >
                    Track Order?
                </a>

                {/* Dropdown Language */}
                <div
                    ref={dropdownRef}
                    className="header-top-lan-curr header-top-lan dropdown pl-[20px] flex flex-wrap relative"
                >
                    <button
                        type="button"
                        className="dropdown-toggle text-[13px] flex items-center p-[0] transition-all duration-[0.3s] ease delay-0 text-[#777] border-[0] tracking-[0.7px]"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        English
                        <i className="fi-rr-angle-small-down text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex"></i>
                    </button>

                    {isDropdownOpen && (
                        <ul className="dropdown-menu absolute top-[32px] left-[auto] right-[0] min-w-[130px] truncate px-[10px] bg-[#fff] z-[1] rounded-[5px] border-[1px] border-solid border-[#eee]">
                            <li className="active border-b-[1px] border-solid border-[#eee] leading-[1.5] py-[5px]">
                                <a
                                    className="dropdown-item p-[7px] text-[14px] bg-transparent"
                                    href="#"
                                >
                                    English
                                </a>
                            </li>
                            <li className="leading-[1.5] py-[5px]">
                                <a
                                    className="dropdown-item p-[7px] text-[14px] bg-transparent"
                                    href="#"
                                >
                                    Italiano
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
