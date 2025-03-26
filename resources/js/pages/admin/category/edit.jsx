import InputError from "@/components/admin/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AdminLayout from "@/layouts/admin-layout";
import { SiteHeader } from "@/layouts/admin/site-header";
import { Transition } from "@headlessui/react";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function edit() {
    const { category } = usePage().props;

    const [pageTitle, setPageTitle] = useState("");

    useEffect(() => {
        setPageTitle(`Edit Category: ${category.name}`);
    }, [pageTitle]);

    const breadcrumbs = [
        { href: route("dashboard"), label: "Dashboard" },
        { label: pageTitle },
    ];

    const { put, errors, processing, recentlySuccessful, data, setData } =
        useForm({
            parent_id: category.parent_id || "",
            name: category.name || "",
            image: category.image || "",
            icon_image: category.icon_image || "",
            description: category.description || "",
            status: category.status || "",
            order: category.order || "",
        });

    const submit = (e) => {
        e.preventDefault();

        put(route("admin.category.update"));
    };

    return (
        <AdminLayout>
            <Head title={pageTitle} />
            <SiteHeader breadcrumbs={breadcrumbs} />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <div className="px-4 lg:px-6">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            className="mt-1 w-full"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            autoComplete="name"
                                        />
                                        <InputError
                                            className="mt-2"
                                            message={errors.name}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Button type="submit" disabled={processing}>
                                        Save
                                    </Button>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">
                                            Saved.
                                        </p>
                                    </Transition>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
