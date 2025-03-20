export default function TextInput({
    type = "text",
    name,
    placeholder = "",
    value,
    onChange,
    className = "",
}) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-none h-[50px] ${className}`}
        />
    );
}
