import { ClipboardList, Globe, User, Zap } from "lucide-react";

export const NAV_ITEMS = [
  { to: "/", label: "About", icon: User, end: true },
  { to: "/projects", label: "Projects", icon: ClipboardList },
  { to: "/website", label: "Websites", icon: Globe },
  { to: "/hobbies", label: "Hobbies", icon: Zap },
];
