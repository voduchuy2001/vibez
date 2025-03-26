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
import DeleteUserDialog from "./delete-user-dialog";
import { useState } from "react";
import { formatDate } from "@/utils/format-date";
import TableSortHeader from "@/components/admin/table-sort-header";
import useSorting from "@/hooks/use-sorting";

export default function DataTable() {
    const { data: users, links, meta } = usePage().props.users;
    const { filters } = usePage().props;
    const { params, setParams, setTimeDebounce } = useDebouncedSearch(
        route(route().current()),
        filters,
    );

    const { sort } = useSorting(filters, setParams);

    const [showDeleteUserDialog, setShowDeleteUserDialog] = useState(false);
    const [userId, setUserId] = useState(null);

    const superUser = [
        {
            value: 1,
            label: "Yes",
            color: "green",
        },
        {
            value: 0,
            label: "No",
            color: "red",
        },
    ];

    return (
        <div className="space-y-4">
            <TableToolbar
                placeholder="Search users"
                search={params?.search}
                params={params}
                setParams={setParams}
                setTimeDebounce={setTimeDebounce}
            />

            <Table>
                <TableHeader className="uppercase text-xs">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Super User</TableHead>
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
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <TableRow
                                key={`user-table-${index}`}
                                className="bg-white"
                            >
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.status}</TableCell>
                                <TableCell>
                                    {superUser.map(
                                        (item) =>
                                            user.super_user === item.value && (
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
                                    {formatDate(user.created_at)}
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
                                                    setShowDeleteUserDialog(
                                                        true,
                                                    );
                                                    setUserId(user.id);
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

            {showDeleteUserDialog && (
                <DeleteUserDialog
                    open={showDeleteUserDialog}
                    onOpenChange={setShowDeleteUserDialog}
                    userId={userId}
                    showTrigger={false}
                />
            )}
        </div>
    );
}
