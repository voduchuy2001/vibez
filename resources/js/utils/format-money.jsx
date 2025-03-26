const formatMoney = (amount, currency = "VND", locale = "vi-VN") => {
    if (typeof amount !== "number" || isNaN(amount)) {
        return "N/A";
    }

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
    }).format(amount);
};

export { formatMoney };
