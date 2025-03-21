export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p {...props} className={`text-red-500 text-sm mt-1 ${className}`}>
            {message}
        </p>
    ) : null;
}
