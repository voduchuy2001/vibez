import React, { Fragment, useEffect } from "react";

export default function MobileMenubar() {
    useEffect(() => {
        const $msNav = $(".gi-menu-content, .overlay-menu"),
            $msNavSubMenu = $msNav.find(".sub-menu");
        $msNavSubMenu.parent().prepend('<span class="menu-toggle"></span>');

        $msNav.on("click", "li a, .menu-toggle", function (e) {
            const $this = $(this);
            if ($this.attr("href") === "#" || $this.hasClass("menu-toggle")) {
                e.preventDefault();
                if ($this.siblings("ul:visible").length) {
                    $this.parent("li").removeClass("active");
                    $this.siblings("ul").slideUp();
                    $this.parent("li").find("li").removeClass("active");
                    $this.parent("li").find("ul:visible").slideUp();
                } else {
                    $this.parent("li").addClass("active");
                    $this
                        .closest("li")
                        .siblings("li")
                        .removeClass("active")
                        .find("li")
                        .removeClass("active");
                    $this
                        .closest("li")
                        .siblings("li")
                        .find("ul:visible")
                        .slideUp();
                    $this.siblings("ul").slideDown();
                }
            }
        });
    }, []);

    return (
        <Fragment>
            <div className="gi-mobile-menu-overlay hidden w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[16]"></div>
            <div
                id="gi-mobile-menu"
                className="gi-mobile-menu transition-all duration-[0.3s] ease-in-out w-[340px] h-full pt-[15px] pb-[20px] px-[20px] fixed top-[0] right-[auto] left-[0] bg-[#fff] flex flex-col z-[17] overflow-auto max-[480px]:w-[300px]"
            >
                <div className="gi-menu-title w-full pb-[10px] flex flex-wrap justify-between">
                    <span className="menu_title flex items-center text-[16px] text-[#4b5966] font-semibold">
                        My Menu
                    </span>
                    <button
                        type="button"
                        className="gi-close-menu relative text-[30px] leading-[1] text-[#777] bg-transparent border-0 mx-[5px]"
                    >
                        ×
                    </button>
                </div>
                <div className="gi-menu-inner">
                    <div className="gi-menu-content">
                        <ul>
                            <li className="dropdown relative drop-list">
                                <a
                                    href="#!"
                                    className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium"
                                >
                                    Home
                                </a>
                                <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                                    <li>
                                        <a
                                            href="index.html"
                                            className="mb-[0] pl-[15px] py-[12px] pr-[0] capitalize block text-[14px] font-normal text-[#777]"
                                        >
                                            Grocery
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <a
                                    href="#!"
                                    className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium"
                                >
                                    Categories
                                </a>
                                <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                                    <li className="relative">
                                        <a
                                            href="#!"
                                            className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                                        >
                                            Classic Variation
                                        </a>
                                        <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                                            <li>
                                                <a
                                                    href="shop-left-sidebar-col-3.html"
                                                    className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                                                >
                                                    Left sidebar 3 column
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="header-res-lan-curr">
                        <div className="header-res-social mt-[30px]">
                            <div className="header-top-social">
                                <ul className="flex flex-row justify-center">
                                    <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                                        <a href="#">
                                            <i className="gicon gi-facebook text-[#fff]"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                                        <a href="#">
                                            <i className="gicon gi-twitter text-[#fff]"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                                        <a href="#">
                                            <i className="gicon gi-instagram text-[#fff]"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px]">
                                        <a href="#">
                                            <i className="gicon gi-linkedin text-[#fff]"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
