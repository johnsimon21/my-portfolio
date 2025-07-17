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
    "mx-1 sm:mx-2 lg:mx-3 bg-[#0E1F52] py-2 px-3 sm:py-3 sm:px-4 lg:py-[15px] lg:px-[30px] rounded-full cursor-pointer text-[#99B2EC] font-semibold text-xs sm:text-sm lg:text-base transition-all duration-200 hover:scale-105 active:scale-95";
  const activeItemClasses = "menu-item-active";

  return (
    <div className="w-full flex justify-center lg:justify-end">
      <ul className="menu flex flex-wrap justify-center lg:justify-end items-center text-white gap-1 sm:gap-2 lg:gap-0 max-w-full">
        {items.map((item) => (
          <li
            key={item.id}
            className={`${baseItemClasses} ${item.isActive ? activeItemClasses : ''} whitespace-nowrap`}
            onClick={() => onItemClick?.(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};