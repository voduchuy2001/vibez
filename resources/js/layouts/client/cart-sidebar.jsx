import { useCart } from "@/contexts/cart-context";

export default function CartSidebar() {
    const { isCartOpen, closeCart } = useCart();

    return (
        <>
            {isCartOpen && (
                <div
                    className="gi-side-cart-overlay w-full h-screen fixed top-0 left-0 bg-[#000000cc] z-[17]"
                    onClick={closeCart}
                />
            )}
            <div
                className={`gi-side-cart w-[350px] max-[480px]:w-[300px] h-full pt-[15px] px-[20px] text-[14px] font-normal fixed z-[17] top-0 right-0 transition-all duration-500 ease-in-out bg-white overflow-auto 
                ${isCartOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
            >
                <div className="gi-cart-inner relative z-[9] flex flex-col h-full justify-between">
                    <div className="gi-cart-top">
                        <div className="gi-cart-title w-full flex flex-wrap justify-between">
                            <span className="cart_title text-[15px] text-[#4b5966] font-semibold mb-[20px]">
                                My Cart
                            </span>
                            <a
                                onClick={closeCart}
                                href="#!"
                                className="gi-cart-close relative border-[0] text-[30px] leading-[20px] text-[#4b5966]"
                            >
                                <i className="fi-rr-cross-small text-[20px] leading-[0]"></i>
                            </a>
                        </div>
                        <ul className="gi-cart-pro-items">
                            <li className="mb-[15px] p-[15px] flex overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                                <a
                                    href="product-left-sidebar.html"
                                    className="gi-pro-img flex grow-[1] basis-[20%] items-center"
                                >
                                    <img
                                        src="assets/img/product-images/25_1.jpg"
                                        className="w-full"
                                        alt="product"
                                    />
                                </a>
                                <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
                                    <a
                                        href="product-left-sidebar.html"
                                        className="cart-pro-title w-full pr-[30px] text-[#777] whitespace-normal overflow-hidden text-ellipsis block text-[15px] leading-[18px] font-normal"
                                    >
                                        Fresh Lichi
                                    </a>
                                    <span className="cart-price text-[14px] block mt-[5px]">
                                        <span className="text-[#777] font-semibold text-[16px]">
                                            $25.00
                                        </span>
                                        x 1 kg
                                    </span>
                                    <div className="qty-plus-minus border-[1px] border-solid border-[#eee] h-[35px] overflow-hidden relative w-[85px] flex items-center justify-between py-[7px] mt-[7px]">
                                        <input
                                            className="qty-input"
                                            type="text"
                                            name="gi-qtybtn"
                                            defaultValue="1"
                                        />
                                    </div>
                                    <a
                                        href="#!"
                                        className="remove leading-[15px] absolute top-[0] right-[0] pl-[10px] text-[#ff0000] text-[22px]"
                                    >
                                        ×
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="gi-cart-bottom">
                        <div className="cart-sub-total flex flex-wrap justify-between pt-[0] pb-[8px] border-t-[1px] border-solid border-[#eee] mt-[20px]">
                            <table className="table cart-table w-full">
                                <tbody className="mt-[10px]">
                                    <tr>
                                        <td className="text-left font-medium text-[#777] p-[6px]">
                                            Sub-Total :
                                        </td>
                                        <td className="text-right font-bold text-[#777] p-[6px]">
                                            $300.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left font-medium text-[#777] p-[6px]">
                                            VAT (20%) :
                                        </td>
                                        <td className="text-right font-bold text-[#777] p-[6px]">
                                            $60.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left font-medium text-[#777] p-[6px]">
                                            Total :
                                        </td>
                                        <td className="text-right font-bold text-[#777] primary-color p-[6px]">
                                            $360.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cart_btn flex justify-between mb-[20px]">
                            <a
                                href="cart.html"
                                className="gi-btn-1 w-[48%] h-[40px] block uppercase font-semibold text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#4b5966] text-[#fff] border-[0] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                            >
                                View Cart
                            </a>
                            <a
                                href="checkout.html"
                                className="gi-btn-2 w-[48%] h-[40px] block uppercase font-semibold text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#5caf90] text-[#fff] text-center rounded-[5px] transition-all dummy-[0.3s] ease-in-out hover:bg-[#4b5966]"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
