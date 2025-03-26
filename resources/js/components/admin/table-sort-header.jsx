import { cn } from "@/lib/utils.js";
import { Button } from "@/components/ui/button.jsx";
import { ArrowDownIcon, ArrowUpIcon, ChevronsUpDownIcon } from "lucide-react";
import React from "react";

const SortIcon = ({ sort }) => {
    const icons = {
        desc: <ArrowDownIcon className="ml-2 h-3.5 w-3.5" />,
        asc: <ArrowUpIcon className="ml-2 h-3.5 w-3.5" />,
        default: <ChevronsUpDownIcon className="ml-2 h-3.5 w-3.5" />,
    };

    return icons[sort] || icons.default;
};

export default function TableSortHeader({ className, title, sort, ...props }) {
    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center -ml-0.5 h-8 hover:bg-gray-200 border-none text-xs uppercase"
                {...props}
            >
                <span>{title}</span>
                <SortIcon sort={sort} />
            </Button>
        </div>
    );
}
