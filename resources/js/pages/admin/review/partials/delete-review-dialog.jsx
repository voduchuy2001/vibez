import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "@inertiajs/react";
import { TrashIcon } from "lucide-react";
import React from "react";

export default function DeleteReviewDialog({
    reviewId,
    open,
    onOpenChange,
    showTrigger = true,
    ...props
}) {
    const { delete: destroy, processing } = useForm();

    const handleDelete = (e) => {
        e.preventDefault();

        destroy(route("admin.review.destroy", { id: reviewId }), {
            preserveScroll: true,
            onError: (error) => console.log(error),
            onFinish: () => onOpenChange?.(false),
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange} {...props}>
            {showTrigger ? (
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                        <TrashIcon className="mr-2 size-4" aria-hidden="true" />
                    </Button>
                </DialogTrigger>
            ) : null}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2 sm:space-x-0">
                    <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                    </DialogClose>

                    <DialogClose asChild>
                        <Button
                            disabled={processing}
                            onClick={handleDelete}
                            variant="destructive"
                        >
                            Confirm
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
