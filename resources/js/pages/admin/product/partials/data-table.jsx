import TableFilter from "@/components/admin/table-filter";
import TablePagination from "@/components/admin/table-pagination";
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
import { usePage } from "@inertiajs/react";
import { MoreHorizontal } from "lucide-react";
import EmptyState from "@/components/admin/empty-state";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DeleteProductDialog from "./delete-product-dialog";
import { useState } from "react";
import { formatDate } from "@/utils/format-date";
import TableSortHeader from "@/components/admin/table-sort-header";
import useSorting from "@/hooks/use-sorting";
import { formatMoney } from "@/utils/format-money";

export default function DataTable() {
    const { data: products, links, meta } = usePage().props.products;
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

    const [showDeleteProductDialog, setShowDeleteProductDialog] =
        useState(false);
    const [productId, setProductId] = useState(null);

    return (
        <div className="space-y-4">
            <TableToolbar
                placeholder="Search products"
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
                <TableHeader className="uppercase text-xs">
                    <TableRow>
                        <TableHead>Thumb</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Code</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Status</TableHead>
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
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <TableRow
                                key={`product-table-${index}`}
                                className="bg-white"
                            >
                                <TableCell>
                                    <Avatar className="rounded-md">
                                        <AvatarImage src={product.thumbnail} />
                                        <AvatarFallback className="rounded-md">
                                            DC
                                        </AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.code}</TableCell>
                                <TableCell>
                                    {formatMoney(product?.defaultSku?.price)}
                                </TableCell>
                                <TableCell>
                                    {product?.defaultSku?.stock}
                                </TableCell>
                                <TableCell>
                                    {status.map(
                                        (item) =>
                                            product.status.toLowerCase() ===
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
                                    {formatDate(product.created_at)}
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
                                                    setShowDeleteProductDialog(
                                                        true,
                                                    );
                                                    setProductId(product.id);
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

            {showDeleteProductDialog && (
                <DeleteProductDialog
                    open={showDeleteProductDialog}
                    onOpenChange={setShowDeleteProductDialog}
                    productId={productId}
                    showTrigger={false}
                />
            )}
        </div>
    );
}
