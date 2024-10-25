interface RevButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string | any;
}

const RevButton: React.FC<RevButtonProps> = ({ name, className, ...rest }) => {
  return (
    <button
      className={`bg-btnBgColor hover:bg-btnHoverColor text-white font-semibold px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${className}`} // Default Tailwind styles + custom className
      {...rest}
    >
      {name}
    </button>
  );
};

export default RevButton;
