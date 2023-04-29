interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disable: boolean;
  outline: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disable,
  outline,
}) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={`
    rounded-full
    border-2
    font-semibold
    transition
    hover:opacity-70
    disabled:cursor-not-allowed
    disabled:opacity-70
    ${fullWidth ? "w-full" : "w-fit"}
    
    ${secondary ? "bg-neutral-300" : "bg-blue-400"}
    
    ${secondary ? "text-gray-900" : "text-neutral-300"}
    
    ${secondary ? "border-neutral-300" : "border-blue-400"}
    
    ${large ? "text-xl" : "text-md"}
    ${large ? "px-5" : "px-4"}
    ${large ? "py-3" : "py-2"}
    ${outline ? "bg-transparent" : ""}
    ${outline ? "border-neutral-300" : ""}
    ${outline ? "text-neutral-300" : ""}
    `}
    >
      {label}
    </button>
  );
};
