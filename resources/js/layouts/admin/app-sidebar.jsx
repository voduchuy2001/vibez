import {
    BellIcon,
    BookMarked,
    EarthIcon,
    Home,
    LayoutGrid,
    Package,
    SearchIcon,
    SettingsIcon,
    Star,
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
            url: "#",
            icon: LayoutGrid,
        },
        {
            title: "Products",
            url: "#",
            icon: Package,
        },
        {
            title: "Reviews",
            url: "#",
            icon: Star,
        },
        {
            title: "Posts",
            url: "#",
            icon: BookMarked,
        },
        {
            title: "Announcements",
            url: "#",
            icon: BellIcon,
        },
        {
            title: "Users",
            url: "#",
            icon: UsersIcon,
        },
    ],

    navSecondary: [
        {
            title: "Website client",
            url: route("home"),
            icon: EarthIcon,
        },
        {
            title: "Settings",
            url: "#",
            icon: SettingsIcon,
        },
        {
            title: "Search",
            url: "#",
            icon: SearchIcon,
        },
    ],
};

export function AppSidebar({ ...props }) {
    const { auth: user } = usePage().props;

    return (
        <Sidebar collapsible="offcanvas" {...props}>
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
