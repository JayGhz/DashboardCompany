import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    ShieldCheck,
    CircleHelpIcon,
    Calendar,
    icons,
    Settings,
} from 'lucide-react';

export const SidebarRoutesData = [
    {
        icon: PanelsTopLeft,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Building2,
        label: "Companies",
        href: "/companies",
    },
    {
        icon: Calendar,
        label: "Calendar",
        href: "/tasks",
    }
];

export const dataToolsSidebar = [
    {
        icon: CircleHelpIcon,
        label: "Fags",
        href: "/fags",
    },
    {
        icon: BarChart4,
        label: "Analytics",
        href: "/analytics",
    },
];

export const dataSupportSidebar = [
    {
        icon: Settings,
        label: "Settings",
        href: "/settings",
    },
    {
        icon: ShieldCheck,
        label: "Security",
        href: "/security",
    },
]