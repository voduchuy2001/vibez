import React from "react";

export default function Overlay() {
    $(document).ready(function () {
        $("#gi-overlay").fadeOut("slow");
    });

    return (
        <div
            id="gi-overlay"
            class=" w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-[#fff] z-[99] flex items-center justify-center overflow-hidden"
        >
            <div class="loader"></div>
        </div>
    );
}
