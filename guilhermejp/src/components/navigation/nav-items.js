import { ClipboardList, Globe, User, Zap } from "lucide-react";

export const NAV_ITEMS = [
  { to: "/", label: "Sobre", icon: User, end: true },
  { to: "/projects", label: "Projetos", icon: ClipboardList },
  { to: "/website", label: "Sites", icon: Globe },
  { to: "/hobbies", label: "Hobbies", icon: Zap },
];

