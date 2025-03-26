import {
    EarthIcon,
    Home,
    KeyRoundIcon,
    LayoutGrid,
    NewspaperIcon,
    Package,
    SettingsIcon,
    Star,
    TagsIcon,
    UsersIcon,
} from "lucide-react";

import { NavMain } from "@/layouts/admin/nav-main";
import { NavSecondary } from "@/layouts/admin/nav-secondary";
import { NavUser } from "@/layouts/admin/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";

const data = {
    navMain: [
        {
            title: "Dashboard",
            url: route("dashboard"),
            icon: Home,
        },
        {
            title: "Categories",
            url: route("admin.category.index"),
            icon: TagsIcon,
        },
        {
            title: "Products",
            url: route("admin.product.index"),
            icon: Package,
        },
        {
            title: "Reviews",
            url: route("admin.review.index"),
            icon: Star,
        },
        {
            title: "Posts",
            url: route("admin.post.index"),
            icon: NewspaperIcon,
        },
        {
            title: "Users",
            url: route("admin.user.index"),
            icon: UsersIcon,
        },
        {
            title: "Roles and permissions",
            url: route("admin.role.index"),
            icon: KeyRoundIcon,
        },
    ],

    navSecondary: [
        {
            title: "View website",
            url: route("home"),
            icon: EarthIcon,
        },
        {
            title: "Settings",
            url: route("admin.setting.index"),
            icon: SettingsIcon,
        },
    ],
};

export function AppSidebar({ ...props }) {
    const { auth: user } = usePage().props;

    return (
        <Sidebar collapsible="icon" variant="floating" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <Link
                                href={route("dashboard")}
                                className="text-primary"
                            >
                                <span className="text-base font-bold">
                                    Dolphin Clothing
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
