import MiniCartHeader from "./mini-cart-header";
import HeaderTopRight from "./header-top-right";

export default function TopHeader() {
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
                            </ul>
                        </div>
                    </div>

                    <div className="grow-[1] shrink-[0] basis-[0%] text-center max-[1199px]:hidden">
                        <div className="header-top-message text-[13px]">
                            World's Fastest Online Shopping Destination
                        </div>
                    </div>

                    <HeaderTopRight />

                    <MiniCartHeader />
                </div>
            </div>
        </div>
    );
}
