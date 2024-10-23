import { Button, FormLabel } from "@mui/material";
import { TextareaAutosize } from '@mui/base';

const OCRFeature = () => {
  return (
    <div>
      <div className="shadow-xl rounded-lg bg-blue-100  p-6 ">
      <h5>Give Your PDF Here</h5>
      <div className="flex justify-center items-center">
        <FormLabel className="text-sm">Upload Image for OCR:</FormLabel>
        <input type="file" accept="image/*" className=" p-3 rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring" />
        <Button color="info" variant="contained">Extract Text</Button>
      </div>
      </div>
      <div className="shadow-xl rounded-lg bg-blue-100  p-6 ">
      
      <div className="flex justify-start">
        <FormLabel className="text-sm">Extracted Text:</FormLabel>
        <TextareaAutosize></TextareaAutosize>
      </div>
      </div>
     
    </div>
  );
};

export default OCRFeature;
