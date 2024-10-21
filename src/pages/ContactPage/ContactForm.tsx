import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    // Initialize the useForm hook
    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log(data);
        reset() 
    };

    return (
        <div>
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
                                    helperText={errors.companyName ? "Company Name is required" : ""}
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
                                <div className="col-span-6 sm:col-span-3">
                                    <TextField
                                        className="w-full"
                                        label="Number"
                                        type="number" // Change from "tel" to "number"
                                        {...register("number", { required: true, valueAsNumber: true })} // Use valueAsNumber to get the value as a number
                                        error={!!errors.number}
                                        helperText={errors.number ? "Number is required" : ""}
                                        inputProps={{ min: 0 }} // Optional: Prevent negative numbers
                                    />
                                </div>

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
                            <Button className="mt-4" variant="contained" type="submit">
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
