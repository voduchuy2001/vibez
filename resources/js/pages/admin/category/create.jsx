import InputError from "@/components/admin/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AdminLayout from "@/layouts/admin-layout";
import { SiteHeader } from "@/layouts/admin/site-header";
import { Transition } from "@headlessui/react";
import { Head, useForm, usePage } from "@inertiajs/react";

export default function create() {
    const { categories } = usePage().props;

    const breadcrumbs = [
        { href: route("dashboard"), label: "Dashboard" },
        { label: "Create Category" },
    ];

    const { post, processing, data, setData, errors, recentlySuccessful } =
        useForm({
            parent_id: "",
            name: "",
            image: "",
            icon_image: "",
            description: "",
            status: "",
            order: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.category.store"));
    };

    return (
        <AdminLayout>
            <Head title="Create Category" />
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
