interface NavItemProps {
  title: string;
  href: string;
  activeItem: boolean;
  onClick: () => void;
}

const NavItem = ({ title, href, activeItem, onClick }: NavItemProps) => {
  return (
    <li className="mb-2 last:mb-0">
      <a
        onClick={onClick}
        className={`${
          activeItem
            ? "text-color-tertiary"
            : "text-color-secondary hover:text-color-tertiary"
        } transition-colors duration-500 ease-in-out hover:font-medium}`}
        href={href}
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
