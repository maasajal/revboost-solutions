import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../app/hooks/useAxiosSecure";
import MessageRow from "./MessageRow";
import { Helmet } from "react-helmet";
interface Message {
  content: string;
  readStatus: string;
}
interface Data {
  createdAt: string;
  email: string;
  messages: Message[];
  updatedAt: string;
  _id: string;
  __v: number;
}

export default function CustomerMessage() {
  const axiosSecure = useAxiosSecure();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMessage = async () => {
    setLoading(true);
    const res = await axiosSecure.get("/messages");
    setMessages(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMessage();
  }, []);
  if (loading) return <>Loading</>;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chat - RevBoost Solutions</title>
      </Helmet>
      <h2 className="mb-6 text-balance">Check Messages</h2>
      <div className="overflow-x-auto min-w-full max-w-32">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Read Status</TableCell>
                <TableCell align="right">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messages.map((row: Data, index) => (
                <MessageRow key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
