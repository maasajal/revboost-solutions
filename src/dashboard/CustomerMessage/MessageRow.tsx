import { Button, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
interface Message {
    content: string;
    readStatus: string; // Assuming this is a string representing the read status of the message
}
interface Data {
    createdAt: string;
    email: string;
    messages: Message[];
    updatedAt: string;
    _id: string;
    __v: number;
}
interface MessageProps {
    row: Data;
}
const MessageRow: React.FC<MessageProps> = ({ row }) => {
    const readStatus = row.messages.some(status => status.readStatus === "unread");
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {row.email}
            </TableCell>
            <TableCell align="center">{row.createdAt}</TableCell>
            <TableCell  sx={{ color: readStatus ? 'red' : 'green' }} align="center">{readStatus ? "unread" : "read"}</TableCell>
            <TableCell align="right"> <Link to='/dashboard/messages-details'><Button variant="contained">Details</Button></Link></TableCell>
        </TableRow>
    );
};

export default MessageRow;