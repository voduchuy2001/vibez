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
import DeleteRoleDialog from "./delete-role-dialog";
import { useState } from "react";
import { formatDate } from "@/utils/format-date";
import TableSortHeader from "@/components/admin/table-sort-header";
import useSorting from "@/hooks/use-sorting";

export default function DataTable() {
    const { data: roles, links, meta } = usePage().props.roles;
    const { filters } = usePage().props;
    const { params, setParams, setTimeDebounce } = useDebouncedSearch(
        route(route().current()),
        filters,
    );

    const { sort } = useSorting(filters, setParams);

    const [showDeleteRoleDialog, setShowDeleteRoleDialog] = useState(false);
    const [roleId, setRoleId] = useState(null);

    return (
        <div className="space-y-4">
            <TableToolbar
                placeholder="Search roles"
                search={params?.search}
                params={params}
                setParams={setParams}
                setTimeDebounce={setTimeDebounce}
            />

            <Table>
                <TableHeader className="uppercase text-xs">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
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
                    {roles.length > 0 ? (
                        roles.map((role, index) => (
                            <TableRow
                                key={`role-table-${index}`}
                                className="bg-white"
                            >
                                <TableCell>{role.name}</TableCell>
                                <TableCell>{role.description}</TableCell>
                                <TableCell className="text-center">
                                    {formatDate(role.created_at)}
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
                                                    setShowDeleteRoleDialog(
                                                        true,
                                                    );
                                                    setRoleId(role.id);
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

            {showDeleteRoleDialog && (
                <DeleteRoleDialog
                    open={showDeleteRoleDialog}
                    onOpenChange={setShowDeleteRoleDialog}
                    roleId={roleId}
                    showTrigger={false}
                />
            )}
        </div>
    );
}
