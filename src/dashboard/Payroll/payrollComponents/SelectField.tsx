import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface SelectFieldProps {
  label: string;
  options: string[];
  register: UseFormRegisterReturn;
  error?: FieldError;
  defaultValue?: string;
}

const SelectField = ({
  label,
  options,
  register,
  error,
  defaultValue,
}: SelectFieldProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        className="w-full p-3 rounded dark:bg-gray-100 border-2"
        {...register}
        defaultValue={defaultValue}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <small className="text-red-400 mt-2">This field is required</small>
      )}
    </div>
  );
};

export default SelectField;
