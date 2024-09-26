import { FC } from "react";

interface ButtonProps {
  name: string;
}

const RevButton: FC<ButtonProps> = ({ name }) => {
  return (
    <>
      <button className="btn bg-btnBgColor hover:bg-btnBgHoverColor text-white font-semibold px-4 py-2 rounded-xl border-none">
        {name}
      </button>
    </>
  );
};

export default RevButton;
