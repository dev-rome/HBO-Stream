import Link from "next/link";

interface NavItemProps {
  title: string;
  href: string;
  activeItem: boolean;
  onClick: () => void;
}

const NavItem = ({ title, href, activeItem, onClick }: NavItemProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <li className="mb-2 last:mb-0">
      <Link
        href={href}
        onClick={onClick}
        className={`${
          activeItem
            ? "text-color-tertiary"
            : "text-color-secondary hover:text-color-tertiary"
        } transition-colors duration-500 ease-in-out hover:font-medium`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
