import React, { Fragment, useEffect } from "react";

export default function Announcement() {
    useEffect(() => {
        setTimeout(function () {
            $("#gi-popnews-bg").fadeIn();
            $("#gi-popnews-box").fadeIn();
        }, 5000);
        $("#gi-popnews-close").on("click", () => {
            $("#gi-popnews-bg").fadeOut();
            $("#gi-popnews-box").fadeOut();
        });

        $("#gi-popnews-bg").on("click", () => {
            $("#gi-popnews-bg").fadeOut();
            $("#gi-popnews-box").fadeOut();
        });
    }, []);

    return (
        <Fragment>
            <div id="gi-popnews-bg"></div>
            <div id="gi-popnews-box">
                <div
                    id="gi-popnews-close"
                    className="transition-all duration-[0.3s] ease-in-out absolute top-[0] right-[0] cursor-pointer h-[30px] w-[30px] text-[#ff0000] rounded-[100%] flex items-center justify-center text-[24px] leading-[1] opacity-[0.5] hover:opacity-[1]"
                >
                    ×
                </div>
                <div className="mx-[-12px]">
                    <div className="w-full flex flex-wrap">
                        <div className="min-[768px]:w-[50%] w-full px-[12px] max-[767px]:hidden">
                            <img
                                src="assets/img/bg/newsletter.png"
                                alt="newsletter"
                                className="w-full rounded-[5px]"
                            />
                        </div>
                        <div className="min-[768px]:w-[50%] w-full px-[12px]">
                            <div
                                id="gi-popnews-box-content"
                                className="h-full flex flex-col items-center justify-center"
                            >
                                <h2 className="text-[#4b5966] block text-[22px] leading-[33px] font-semibold mb-[10px] mx-auto capitalize">
                                    Newsletter.
                                </h2>
                                <p className="text-[15px] leading-[28px] font-light mb-[1rem]">
                                    Subscribe the masterkart to get in touch and
                                    get the future update.
                                </p>
                                <form
                                    id="gi-popnews-form"
                                    action="#"
                                    method="post"
                                >
                                    <input
                                        type="email"
                                        name="newsemail"
                                        className="bg-transparent border-[1px] border-solid border-[#eee] text-[14px] mb-[27px] px-[15px] w-full h-[50px] outline-[0] rounded-[5px]"
                                        placeholder="Email Address"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] py-[10px] max-[360px]:py-[3px] px-[15px] max-[360px]:px-[10px] bg-[#5caf90] text-[#fff] border-[0] text-[14px] max-[360px]:text-[13px] tracking-[0] font-medium inline-flex items-center hover:bg-[#4b5966] hover:text-[#fff]"
                                        name="subscribe"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
