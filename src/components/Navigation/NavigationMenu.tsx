interface NavigationItem {
  id: string;
  label: string;
  isActive?: boolean;
}

interface NavigationMenuProps {
  items: NavigationItem[];
  onItemClick?: (id: string) => void;
}

export const NavigationMenu = ({ items, onItemClick }: NavigationMenuProps) => {
  const baseItemClasses =
    "mx-2 sm:mx-3 bg-[#0E1F52] py-2 px-4 sm:py-[15px] sm:px-[30px] rounded-full cursor-pointer text-[#99B2EC] font-semibold text-sm sm:text-base transition-colors duration-200";
  const activeItemClasses = "menu-item-active";

  return (
    <ul className="menu flex flex-wrap justify-center grow items-center text-white gap-y-2 sm:gap-y-0">
      {items.map((item) => (
        <li
          key={item.id}
          className={`${baseItemClasses} ${item.isActive ? activeItemClasses : ''}`}
          onClick={() => onItemClick?.(item.id)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};