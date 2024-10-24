import { Button, FormLabel } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { useState } from "react";
import Tesseract from "tesseract.js";

const OCRFeature = () => {
  const [image, setImage] = useState<File | null>(null);
  const [ocrText, setOcrText] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setImage(file);
  };

  const extractTextFromImage = async () => {
    if (image) {
      try {
        const result = await Tesseract.recognize(image, "eng", {
          logger: (m) => console.log(m),
        });
        setOcrText(result.data.text);
        //   setValue("extractedText", result.data.text); // Save to form field
      } catch (error) {
        console.error("Error extracting text:", error);
      }
    }
  };
  return (
    <div>
      <div className="p-12 shadow-lg">
      <div className="shadow-xl bg-blue-100 rounded  px-12 py-4">
        <h5>Give Your PDF Here</h5>
        <div className="flex justify-center items-center gap-4">
          <FormLabel className="text-sm">Upload Image for OCR:</FormLabel>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            // className=" p-3 rounded focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
            className="px-8 py-6 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100"
          />
          <Button className="animate-pulse" onClick={extractTextFromImage} color="info" variant="contained">
            Extract Text
          </Button>
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-blue-100  p-6">
        <div className="flex justify-start items-start">
          <FormLabel>Extracted Text:</FormLabel>
          <TextareaAutosize
            className="text-sm w-full rounded-lg p-4"
            value={ocrText}
            readOnly
          ></TextareaAutosize>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OCRFeature;
