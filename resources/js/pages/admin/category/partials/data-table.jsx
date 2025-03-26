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
import { Link, usePage } from "@inertiajs/react";
import { MoreHorizontal, PlusIcon } from "lucide-react";
import { useState } from "react";
import DeleteCategoryDialog from "./delete-category-dialog";
import EmptyState from "@/components/admin/empty-state";
import { formatDate } from "@/utils/format-date";

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
            value: "published",
            label: "Published",
            color: "green",
        },
        {
            value: "pending",
            label: "Pending",
            color: "yellow",
        },
        {
            value: "draft",
            label: "Draft",
            color: "red",
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

                <Button asChild size="sm">
                    <Link href={route("admin.category.create")}>
                        <PlusIcon className="w-4 h-4" /> Create
                    </Link>
                </Button>
            </div>

            <Table>
                <TableHeader className="uppercase text-xs">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Parent</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-10">
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
                        <TableHead className="w-10">
                            <TableSortHeader
                                title="Created At"
                                onClick={() => {
                                    setTimeDebounce(50);
                                    sort("created_at");
                                }}
                                sort={
                                    params.col === "created_at"
                                        ? params.sort
                                        : null
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
                                    {status.map(
                                        (item) =>
                                            category.status.toLowerCase() ===
                                                item.value && (
                                                <span
                                                    key={item.value}
                                                    className={`inline-flex items-center rounded bg-${item.color}-50 px-2 py-0.5 text-xs font-medium text-${item.color}-700 ring-1 ring-inset ring-${item.color}-600/20`}
                                                >
                                                    {item.label}
                                                </span>
                                            ),
                                    )}
                                </TableCell>
                                <TableCell className="text-center">
                                    {category.order}
                                </TableCell>
                                <TableCell className="text-center">
                                    {formatDate(category.created_at)}
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
                                                <Link
                                                    href={route(
                                                        "admin.category.edit",
                                                        { id: category.id },
                                                    )}
                                                >
                                                    Edit
                                                </Link>
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
