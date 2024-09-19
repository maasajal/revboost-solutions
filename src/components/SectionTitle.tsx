import { FC } from "react";
interface SectionTitleProps {
  title?: string;
  intro?: string;
  content?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, intro, content }) => {
  return (
    <div className="text-center pb-10 space-y-2 py-10">
      <h4 className="uppercase">{intro}</h4>
      <h2 className="text-4xl font-bold text-[#FF0000CC] uppercase py-3 w-fit px-10 mx-auto border-x-4 border-[#FF0000CC]">
        {title}
      </h2>
      <p className="max-w-xl mx-auto leading-8">{content}</p>
    </div>
  );
};
export default SectionTitle;
