
interface ButtonDefaultProps {
    name: string;
  }

const ButtonDefault :React.FC <ButtonDefaultProps>= ({name}) => {
    return (
        <button  className="border h-14 px-2 rounded-lg">
        {name ? name : "text"}
      </button>
    );
};

export default ButtonDefault;