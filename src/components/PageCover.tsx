import { FC } from "react";
import { Parallax } from "react-parallax";

// Define the types for the props
interface PageCoverProps {
  bgCoverImg: string;
  heading: string;
  headingText?: string;
  title: string;
  content?: string;
  style?: string;
}

// Define the component as a functional component with the props type
const PageCover: FC<PageCoverProps> = ({
  bgCoverImg,
  heading,
  headingText,
  title,
  content,
  style,
}) => {
  return (
    <Parallax
      // blur={{ min: -50, max: 50 }}
      bgImage={bgCoverImg}
      bgImageAlt="Cover photo"
      strength={-200}
      className={`px-3 sm:px-6 md:px-20 ${style}`}
    >
      <section className="bg-black bg-opacity-50 my-14 md:my-24 py-5 md:py-20 mx-auto rounded-xl">
        <div className="px-3 py-10 text-white text-center space-y-5">
          <h1 className="uppercase">{heading}</h1>
          {headingText && (
            <p className="max-w-3xl mx-auto uppercase">{headingText}</p>
          )}
          <h2>{title}</h2>
          {content && <p className="max-w-3xl mx-auto">{content}</p>}
        </div>
      </section>
    </Parallax>
  );
};

export default PageCover;
