import React from "react";

export default function TopHeader() {
    $(document).on("click", ".dropdown-toggle", function (e) {
        e.stopPropagation();
        $(this).siblings(".dropdown-menu").toggleClass("hidden");
    });

    $(document).on("click", function () {
        $(".dropdown-menu").addClass("hidden");
    });

    $(document).on("click", ".header-top-lan li", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    return (
        <div className="header-top py-[10px] text-[#777] bg-[#f8f8fb]">
            <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                <div className="w-full flex flex-wrap px-[12px]">
                    <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:block max-[767px]:hidden">
                        <div className="header-top-social">
                            <ul className="mb-[0] p-[0] flex">
                                <li className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px] mr-[15px]">
                                    <a
                                        href="#!"
                                        className="mx-[5px] text-center flex items-center justify-center text-[15px]"
                                    >
                                        <i className="fi fi-rr-phone-call transition-all duration-[0.3s] ease-in-out text-[#777]"></i>
                                    </a>
                                    +91 987 654 3210
                                </li>
                                <li className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px]">
                                    <a
                                        href="#!"
                                        className="mx-[5px] text-center flex items-center justify-center text-[15px]"
                                    >
                                        <i className="fi fi-brands-whatsapp transition-all duration-[0.3s] ease-in-out text-[#777]"></i>
                                    </a>
                                    +91 987 654 3210
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grow-[1] shrink-[0] basis-[0%] text-center max-[1199px]:hidden">
                        <div className="header-top-message text-[13px]">
                            World's Fastest Online Shopping Destination
                        </div>
                    </div>

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
                            <div class="header-top-lan-curr header-top-lan dropdown pl-[20px] flex flex-wrap relative">
                                <button
                                    type="button"
                                    class="dropdown-toggle text-[13px] flex items-center p-[0] transition-all duration-[0.3s] ease delay-0 text-[#777] border-[0] tracking-[0.7px]"
                                >
                                    English
                                    <i class="fi-rr-angle-small-down text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex"></i>
                                </button>
                                <ul class="hidden dropdown-menu absolute top-[32px] left-[auto] right-[0] min-w-[130px] truncate px-[10px] bg-[#fff] z-[1] rounded-[5px] border-[1px] border-solid border-[#eee]">
                                    <li class="active border-b-[1px] border-solid border-[#eee] leading-[1.5] py-[5px]">
                                        <a
                                            class="dropdown-item p-[7px] text-[14px] bg-transparent"
                                            href="#"
                                        >
                                            English
                                        </a>
                                    </li>
                                    <li class="leading-[1.5] py-[5px]">
                                        <a
                                            class="dropdown-item p-[7px] text-[14px] bg-transparent"
                                            href="#"
                                        >
                                            Italiano
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:hidden">
                        <div className="gi-header-bottons flex justify-end">
                            <div className="right-icons flex flex-row">
                                <a
                                    href="login.html"
                                    className="gi-header-btn gi-header-user mr-[30px] relative transition-all duration-[0.3s] ease-in-out flex text-[#4b5966] w-[auto] items-center"
                                >
                                    <div className="header-icon relative flex">
                                        <i className="fi-rr-user text-[24px] leading-[17px]"></i>
                                    </div>
                                </a>

                                <a
                                    href="wishlist.html"
                                    className="gi-header-btn gi-wish-toggle mr-[30px] relative transition-all duration-[0.3s] ease-in-out flex text-[#4b5966] w-[auto] items-center"
                                >
                                    <div className="header-icon relative flex">
                                        <i className="fi-rr-heart text-[24px] leading-[17px]"></i>
                                    </div>
                                    <span className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
                                        3
                                    </span>
                                </a>

                                <a
                                    href="#!"
                                    className="gi-header-btn gi-cart-toggle mr-[30px] relative transition-all duration-[0.3s] ease-in-out flex text-[#4b5966] w-[auto] items-center"
                                >
                                    <div className="header-icon relative flex">
                                        <i className="fi-rr-shopping-bag text-[24px] leading-[17px]"></i>
                                        <span className="main-label-note-new"></span>
                                    </div>
                                    <span className="gi-header-count gi-cart-count  w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
                                        3
                                    </span>
                                </a>

                                <a
                                    href="#!"
                                    className="gi-header-btn gi-site-menu-icon relative transition-all duration-[0.3s] ease-in-out flex text-[#4b5966] w-[auto] items-center"
                                >
                                    <i className="fi-rr-menu-burger text-[24px] leading-[17px]"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
