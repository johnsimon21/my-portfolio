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
  const baseItemClasses = "mx-[15px] bg-[#0E1F52] py-[15px] px-[30px] rounded-full cursor-pointer text-[#99B2EC] font-semibold";
  const activeItemClasses = "menu-item-active";

  return (
    <ul className="menu flex grow items-center text-white">
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