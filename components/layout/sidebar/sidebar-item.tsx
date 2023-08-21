import { Link } from "@/components/ui/link";
import { SVGIconProps } from "@/assets/icons";
import { cn } from "@/lib/utils";

export type SidebarItemData = {
  label: string;
  href: string;
  icon: (props: SVGIconProps) => JSX.Element;
};

export type SidebarItemProps = Omit<SidebarItemData, "icon"> & {
  active?: boolean;
  compact?: boolean;
  className?: string;
  icon: JSX.Element;
};

const SidebarItem = ({
  label,
  href,
  icon,
  active = false,
  compact = false,
  className,
}: SidebarItemProps) => {
  return (
    <Link
      variant={active ? "secondary" : "ghost"}
      compact={compact}
      className={cn(
        "w-full flex gap-4 text-lg",
        !compact && "justify-start",
        className
      )}
      href={href}
      icon={icon}
    >
      {label}
    </Link>
  );
};

export default SidebarItem;
