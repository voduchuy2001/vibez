import TableFilter from "@/components/admin/table-filter";
import TablePagination from "@/components/admin/table-pagination";
import TableSortHeader from "@/components/admin/table-sort-header";
import TableToolbar from "@/components/admin/table-toolbar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import useDebouncedSearch from "@/hooks/use-debounced-search";
import useSorting from "@/hooks/use-sorting";
import { usePage } from "@inertiajs/react";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import DeleteCategoryDialog from "./delete-category-dialog";
import EmptyState from "@/components/admin/empty-state";

export default function DataTable() {
    const { data: categories, links, meta } = usePage().props.categories;
    const { filters } = usePage().props;
    const { params, setParams, setTimeDebounce } = useDebouncedSearch(
        route(route().current()),
        filters,
    );

    const { sort } = useSorting(filters, setParams);

    const status = [
        {
            value: "Published",
            label: "Published",
        },
        {
            value: "Pending",
            label: "Pending",
        },
        {
            value: "Draft",
            label: "Draft",
        },
    ];

    const [showDeleteCategoryDialog, setShowDeleteCategoryDialog] =
        useState(false);
    const [categoryId, setCategoryId] = useState(null);

    return (
        <div className="space-y-4">
            <TableToolbar
                placeholder="Search categories"
                search={params?.search}
                params={params}
                setParams={setParams}
                setTimeDebounce={setTimeDebounce}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:space-x-1">
                <TableFilter
                    title="Status"
                    filter="status"
                    options={status}
                    params={params}
                    setParams={setParams}
                    setTimeDebounce={setTimeDebounce}
                />
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Parent</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>
                            <TableSortHeader
                                title="Order"
                                onClick={() => {
                                    setTimeDebounce(50);
                                    sort("order");
                                }}
                                sort={
                                    params.col === "order" ? params.sort : null
                                }
                            />
                        </TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.length > 0 ? (
                        categories.map((category, index) => (
                            <TableRow
                                key={`category-table-${index}`}
                                className="bg-white"
                            >
                                <TableCell>{category.name}</TableCell>
                                <TableCell>{category?.parent?.name}</TableCell>
                                <TableCell>{category.description}</TableCell>
                                <TableCell>
                                    {category.status === "Published" && (
                                        <span className="inline-flex items-center rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            Published
                                        </span>
                                    )}
                                    {category.status === "Draft" && (
                                        <span className="inline-flex items-center rounded bg-yellow-50 px-2 py-0.5 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                                            Draft
                                        </span>
                                    )}
                                    {category.status === "Pending" && (
                                        <span className="inline-flex items-center rounded bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                                            Pending
                                        </span>
                                    )}
                                </TableCell>
                                <TableCell className="text-center">
                                    {category.order}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="h-8 w-8 p-0"
                                            >
                                                <span className="sr-only">
                                                    Open menu
                                                </span>
                                                <MoreHorizontal />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                Edit
                                            </DropdownMenuItem>

                                            <DropdownMenuItem
                                                onClick={() => {
                                                    setShowDeleteCategoryDialog(
                                                        true,
                                                    );
                                                    setCategoryId(category.id);
                                                }}
                                            >
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan="100%"
                                className="h-24 text-center bg-white"
                            >
                                <EmptyState />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination links={links} meta={meta} />

            {showDeleteCategoryDialog && (
                <DeleteCategoryDialog
                    open={showDeleteCategoryDialog}
                    onOpenChange={setShowDeleteCategoryDialog}
                    categoryId={categoryId}
                    showTrigger={false}
                />
            )}
        </div>
    );
}
