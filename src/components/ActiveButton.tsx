import Link from "next/link";

interface ActiveButtonProps {
  href: string;
  buttonName: string;
  activeButton: string;
  handleMouseEnter: (buttonName: string) => void;
  handleFocus: (buttonName: string) => void;
}

const ActiveButton = ({
  href,
  buttonName,
  activeButton,
  handleMouseEnter,
  handleFocus,
}: ActiveButtonProps) => {
  return (
    <Link href={href}>
      <button
        onMouseEnter={() => handleMouseEnter(buttonName)}
        onFocus={() => handleFocus(buttonName)}
        className={`bg-color-secondary text-color-primary font-semibold rounded-2xl w-32 h-9 ${
          activeButton === buttonName ? "opacity-100" : "opacity-40"
        }`}
      >
        {buttonName}
      </button>
    </Link>
  );
};

export default ActiveButton;
