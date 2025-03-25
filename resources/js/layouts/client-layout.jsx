import React, { Fragment, useEffect } from "react";
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
import { toast } from "sonner";
import { XCircleIcon } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { usePage } from "@inertiajs/react";

export default function ClientLayout({ children }) {
    $(".gi-site-menu-icon").on("click", function () {
        $(".gi-mobile-menu-overlay").fadeIn();
        $(".gi-mobile-menu").addClass("gi-menu-open");
    });

    $(".gi-mobile-menu-overlay, .gi-close-menu").on("click", function () {
        $(".gi-mobile-menu-overlay").fadeOut();
        $(".gi-mobile-menu").removeClass("gi-menu-open");
    });

    const { flash } = usePage().props;

    useEffect(() => {
        flash.type &&
            toast(flash.message, {
                type: flash.type,
                duration: 2500,
                action: {
                    label: <XCircleIcon className="h-4 w-4 shrink-0" />,
                    onClick: () => toast.dismiss(),
                },
            });
    }, [flash]);

    return (
        <Fragment>
            <Toaster />

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

            <Announcement />
        </Fragment>
    );
}
