import {
  Tag,
  Users,
  Settings,
  Bookmark,
  LayoutGrid,
  LucideIcon,
  Store,
  LucideLineChart,
  MessageCircleMore
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Analytics",
          icon: LucideLineChart,
          submenus: [
            {
              href: "/analytics/stock",
              label: "Stock"
            },
            {
              href: "/analytics/sales",
              label: "Sales"
            }
          ]
        },
        {
          href: "/categories",
          label: "Categories",
          icon: Bookmark
        },
        {
          href: "/tags",
          label: "Friends",
          icon: Tag
        },
        {
          href: "/market",
          label: "Market",
          icon: Store
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          icon: Users
        },
        {
          href: "/account",
          label: "Account",
          icon: Settings
        }
      ]
    },
    {
      groupLabel: "Support",
      menus: [
        {
          href: "/support",
          label: "Support",
          icon: MessageCircleMore
        }
      ]
    }
  ];
}
