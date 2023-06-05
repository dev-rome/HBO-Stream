import Link from "next/link";

interface GenreNavItemProps {
  title: string;
  href: string;
  genres: any[];
  activeItem: boolean;
  onClick: () => void;
}

const GenreNavItem = ({
  title,
  href,
  activeItem,
  onClick,
}: GenreNavItemProps) => {
  return (
    <li className="text-sm mb-2 last:mb-0 list-none">
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

export default GenreNavItem;
