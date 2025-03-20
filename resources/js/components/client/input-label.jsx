export default function InputLabel({
    value,
    className = "",
    children,
    required = false,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]` +
                className
            }
        >
            {value ? value : children}
            {required && <span className="text-red-500">*</span>}
        </label>
    );
}
