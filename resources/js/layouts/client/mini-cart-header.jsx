import { useCart } from "@/contexts/cart-context";
import { Link } from "@inertiajs/react";
import React from "react";

export default function MiniCartHeader() {
    const { openCart } = useCart();

    return (
        <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:hidden">
            <div className="gi-header-bottons flex justify-end">
                <div className="right-icons flex flex-row">
                    <Link
                        href={route("login")}
                        className="gi-header-btn gi-header-user mr-[30px] relative transition-all duration-[0.3s] ease-in-out flex text-[#4b5966] w-[auto] items-center"
                    >
                        <div className="header-icon relative flex">
                            <i className="fi-rr-user text-[24px] leading-[17px]"></i>
                        </div>
                    </Link>

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
                        onClick={openCart}
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
    );
}
