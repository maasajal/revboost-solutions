import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";
import { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Incomes: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { incomes } = useSelector((state: RootState) => state.incomes);
  console.log(incomes, dispatch);
  //  mui modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="container mx-auto mt-10 space-y-4">
      <h2 className="text-center">Income Page</h2>
      <div className="space-y-6 border-2 p-4 shadow-2xl rounded-lg">
        <h3 className="mb-4 text-center text-2xl font-bold leading-tight">
          Your Incomes details
        </h3>
        <div className="flex justify-between">
          <div className="space-y-4">
            <div>
              <h5>From:</h5>
              <p>Company Name:</p>
            </div>
            {/* MODAL*/}
            <div>
              {/* mui modal */}
              <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Add your item here
                    </Typography>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                      />
                    </div>{" "}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
            <div>
              <h5 className="underline">Bill To:</h5>
              <p>Customer Name</p>
              <p>Customer Address</p>
            </div>
          </div>
          <div className="space-y-4">
            <p>Creation Date:</p>
            <p className="text-red-400">Due Date:</p>
          </div>
        </div>

        <div className=" dark:text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="dark:bg-red-400">
                <tr className="text-left">
                  <th className="p-3">Invoice #</th>
                  <th className="p-3">Client</th>
                  <th className="p-3">Issued</th>
                  <th className="p-3">Due</th>
                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {incomes.length === 0 ? (
                  <p>No invoices found.</p>
                ) : (
                  <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Microsoft Corporation</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$6000</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr>
                )}

                {/* <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Tesla Inc.</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$275</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Coca Cola co.</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$8,950,500</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-red-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Nvidia Corporation</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-600">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-600">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$98,218</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr> */}

                <tr className="border-b border-opacity-20">
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3">
                    <h5>Subtotal</h5>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3 text-right">
                    {/* Write Total Below  */}

                    <h5>$6000</h5>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:text-gray-50">
                      <span></span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20">
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3">
                    <h5>VAT(15%)</h5>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3 text-right">
                    {/* Write VAT Below  */}

                    <h5>$6000</h5>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:text-gray-50">
                      <span></span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-red-50">
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                  </td>
                  <td className="p-3">
                    <p></p>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3">
                    <h4>total</h4>
                    <p className="dark:text-gray-600"></p>
                  </td>
                  <td className="p-3 text-right">
                    {/* Write Total Below  */}

                    <h4>$7500</h4>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:text-gray-50">
                      <span></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incomes;
