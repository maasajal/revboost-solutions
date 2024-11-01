import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import useAxiosPublic from "../../app/hooks/useAxiosPublic";
import { messageStatus } from "../../components/utils/successStatus";

interface Data {
  companyName: string;
  name: string;
  email: string;
  phone: number;
  details: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>();
  const axiosPublic = useAxiosPublic();

  const onSubmit: SubmitHandler<Data> = async (data) => {
    try {
      const response = await axiosPublic.post(`messages`, data);
      if (response.status === 201) {
        messageStatus();
        reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <div data-aos="zoom-in">
      <div className="border-2 rounded-xl shadow-lg hover:shadow-xl relative mt-10 md:mt-0">
        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextField
                  className="w-full"
                  label="Company Name"
                  {...register("companyName", { required: true })}
                  error={!!errors.companyName}
                  helperText={
                    errors.companyName ? "Company Name is required" : ""
                  }
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <TextField
                  className="w-full"
                  label="Name"
                  {...register("name", { required: true })}
                  error={!!errors.name}
                  helperText={errors.name ? "Name is required" : ""}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <TextField
                  className="w-full"
                  label="Email"
                  type="email"
                  {...register("email", { required: true })}
                  error={!!errors.email}
                  helperText={errors.email ? "Email is required" : ""}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <TextField
                  className="w-full"
                  label="Number"
                  type="number"
                  {...register("phone", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  error={!!errors.phone}
                  helperText={errors.phone ? "Number is required" : ""}
                  inputProps={{ min: 0 }}
                />
              </div>
              <div className="col-span-full">
                <TextField
                  label="Details"
                  className="w-full"
                  multiline
                  rows={4}
                  {...register("details", { required: true })}
                  error={!!errors.details}
                  helperText={errors.details ? "Details are required" : ""}
                />
              </div>
              <Button
                className="mt-4"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
