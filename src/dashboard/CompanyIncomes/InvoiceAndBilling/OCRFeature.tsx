import { Button, FormLabel } from "@mui/material";

const OCRFeature = () => {
  return (
    <div className="shadow-xl rounded-lg p-6 bg-blue-100">
      <h5>Give Your PDF Here</h5>
      <div>
        <FormLabel className="text-sm">Upload Image for OCR:</FormLabel>
        <input type="file" accept="image/*" className="w-1/2 p-3 rounded  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring" />
        <Button color="info" variant="contained">Extract Text</Button>
      </div>
     
    </div>
  );
};

export default OCRFeature;
