import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/check-availability",
    name: "Book Now",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact",
  },
  {
    id: ncNanoId(),
    href: "/login",
    name: "Login",
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = NAVIGATION_DEMO;
