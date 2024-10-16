import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

const FormField = ({ label, type, register, error }: FormFieldProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        className="w-full p-3 rounded dark:bg-gray-100 border-2"
        {...register}
      />
      {error && (
        <small className="text-red-400 mt-2">This field is required</small>
      )}
    </div>
  );
};

export default FormField;
