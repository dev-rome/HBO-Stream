interface NavItemProps {
  title: string;
  href: string;
  activeItem: boolean;
  onClick: () => void;
}

const SideNavItem = ({ title, href, activeItem, onClick }: NavItemProps) => {
  return (
    <li className="mb-2 last:mb-0" onClick={onClick}>
      <a
        className={`${
          activeItem ? "text-[#868e96]" : "text-[#f8f9fa] hover:text-[#868e96]"
        } transition-colors duration-500 ease-in-out hover:font-medium}`}
        href={href}
      >
        {title}
      </a>
    </li>
  );
};

export default SideNavItem;
