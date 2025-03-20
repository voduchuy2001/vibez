import React, { Fragment } from "react";
import CartSidebar from "./client/cart-sidebar";
import Overlay from "./client/overlay";
import TopHeader from "./client/top-header";
import Navbar from "./client/navbar";
import Menubar from "./client/menubar";
import MobileMenubar from "./client/mobile-menubar";
import { CartProvider } from "@/contexts/cart-context";
import Footer from "./client/footer";
import BackToTop from "./client/back-to-top";
import Announcement from "./client/announcement";

export default function ClientLayout({ children }) {
    $(".gi-site-menu-icon").on("click", function () {
        $(".gi-mobile-menu-overlay").fadeIn();
        $(".gi-mobile-menu").addClass("gi-menu-open");
    });

    $(".gi-mobile-menu-overlay, .gi-close-menu").on("click", function () {
        $(".gi-mobile-menu-overlay").fadeOut();
        $(".gi-mobile-menu").removeClass("gi-menu-open");
    });

    return (
        <Fragment>
            <Overlay />

            <header className="gi-header bg-[#fff] z-[14] max-[991px]:z-[16] relative">
                <CartProvider>
                    <TopHeader />

                    <Navbar />

                    <CartSidebar />
                </CartProvider>

                <Menubar />

                <MobileMenubar />
            </header>

            {children}

            <Footer />

            <BackToTop />

            {/* <Announcement /> */}
        </Fragment>
    );
}
