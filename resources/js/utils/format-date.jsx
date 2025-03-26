const formatDate = (date, options = {}) => {
    if (!date) return "";

    const {
        locale = "en-US",
        formatOptions = {},
        includeTime = false,
    } = options;

    const defaultFormat = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        ...(includeTime && {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }),
    };

    return new Intl.DateTimeFormat(locale, {
        ...defaultFormat,
        ...formatOptions,
    }).format(new Date(date));
};

export { formatDate };
