export default function HeaderTopRight() {
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
            </div>
        </div>
    );
}
