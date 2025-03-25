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

export default function DataTable() {
    const { data: products, links, meta } = usePage().props.products;
    const { filters } = usePage().props;
    const { params, setParams, setTimeDebounce } = useDebouncedSearch(
        route(route().current()),
        filters,
    );

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
                <TableHeader>
                    <TableRow>
                        <TableHead>Thumb</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Status</TableHead>
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
                                    <Avatar>
                                        <AvatarImage
                                            className="rounded-md"
                                            src={product.thumbnail}
                                        />
                                        <AvatarFallback>DC</AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>
                                    {product.status === "Published" && (
                                        <span className="inline-flex items-center rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            Published
                                        </span>
                                    )}
                                    {product.status === "Draft" && (
                                        <span className="inline-flex items-center rounded bg-yellow-50 px-2 py-0.5 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                                            Draft
                                        </span>
                                    )}
                                    {product.status === "Pending" && (
                                        <span className="inline-flex items-center rounded bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                                            Pending
                                        </span>
                                    )}
                                </TableCell>
                                <TableCell className="text-center">
                                    {product.order}
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
