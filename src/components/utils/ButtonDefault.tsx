import { Button } from "@material-tailwind/react";

export function ButtonDefault() {
    return (
        <Button
            color="blue"
            onClick={() => console.log('Button clicked')} // Click event handler
            className="my-custom-class" // Custom CSS class
            disabled={false} // Optional: Disable the button if needed
            title="Click me" // Tooltip for the button
            placeholder="Click me" // Optional: Placeholder (may not be necessary for buttons)
            // Additional properties (if required)
            onPointerEnterCapture={() => console.log('Pointer entered')} // Optional: Handle pointer enter
            onPointerLeaveCapture={() => console.log('Pointer left')} // Optional: Handle pointer leave
        >
            button
        </Button>
    );
}
