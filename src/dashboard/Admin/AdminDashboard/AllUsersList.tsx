import {
    Avatar,
    Box,
    CircularProgress,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useAxiosSecure from "../../../app/hooks/useAxiosSecure";
import UpdateStatus from './UpdateStatus';

interface User {
    _id: string;
    name: string;
    email: string;
    photo?: string;
    subscriptionPlan: string;
    subscriptionStatus: string;
    role: string;
}

const TABS = [
    { label: "All", value: "all" },
    { label: "Admin", value: "admin" },
    { label: "Member", value: "member" },
    { label: "User", value: "user" },
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: '90%', // Mobile devices
        sm: '70%', // Small devices (tablets)
        md: '50%', // Medium devices (desktops)
        lg: '33%', // Large devices (larger desktops)
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const AllUsersList: React.FC = () => {
    const axiosSecure = useAxiosSecure();
    const [activeTab, setActiveTab] = useState<string>("all");
    const [usersData, setUsersData] = useState<User[]>([]);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [refetch, setRefetch] = useState(true)

    const handleOpen = (user: User) => {
        setSelectedUser(user);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedUser(null); // Reset selected user on close
        setOpen(false);
    };

    const getUsers = async () => {
        setLoading(true);
        try {
            const params = {
                tab: activeTab,
                email: email || undefined,
                role: activeTab !== "all" ? activeTab : undefined,
            };
            const response = await axiosSecure.get("/users", { params });
            setUsersData(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        getUsers();
    }, [activeTab, email,refetch]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailInput = (e.target as HTMLFormElement).elements.namedItem("email") as HTMLInputElement;
        setEmail(emailInput.value);
    };

    const handleActive = (value: string) => {
        setActiveTab(value);
        setEmail("");
    };

    const placeholderImage = "https://via.placeholder.com/96";

    return (
        <div className="p-4 max-w-full">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
                <h2 className="text-xl font-semibold">RevBoost Solution Members</h2>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex flex-wrap border-b border-gray-300">
                    {TABS.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => handleActive(value)}
                            className={`py-2 px-4 border-b-2 font-medium ${activeTab === value
                                ? "border-blue-500 text-blue-500"
                                : "border-transparent text-gray-600"
                                } hover:text-blue-500`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <form onSubmit={handleSearch} className="w-full md:max-w-xs flex gap-2 items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        name="email"
                        className="border rounded p-2 w-full"
                    />
                    <button type="submit">
                        <IoMdSearch className="text-4xl rounded-lg bg-lightRedBg text-secondary border cursor-pointer" />
                    </button>
                </form>
            </div>
            <div className="overflow-x-auto">
                {loading ? (
                    <div className="flex justify-center items-center h-24">
                        <CircularProgress />
                    </div>
                ) : (
                    <div className="mt-4 p-4 border border-gray-300 rounded overflow-x-auto">
                        {usersData.length === 0 ? (
                            <Typography variant="body1" align="center">
                                No users found
                            </Typography>
                        ) : (
                            <TableContainer
                                className="overflow-x-auto min-w-full max-w-32 px-5"
                                component={Paper}>
                                <Table aria-label="user table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Photo</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Plan</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Role</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {usersData.map((user) => (
                                            <TableRow key={user._id} hover>
                                                <TableCell>
                                                    <Avatar
                                                        src={user.photo || placeholderImage}
                                                        alt={user.name}
                                                        onError={(e) => {
                                                            (e.currentTarget as HTMLImageElement).src = placeholderImage;
                                                        }}
                                                        sx={{ width: 56, height: 56 }}
                                                    />
                                                </TableCell>
                                                <TableCell>{user.name}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.subscriptionPlan}</TableCell>
                                                <TableCell>
                                                    <button onClick={() => handleOpen(user)} style={{ cursor: 'pointer' }}>
                                                        {user.subscriptionStatus}
                                                    </button>
                                                </TableCell>
                                                <TableCell>{user.role}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                    </div>
                )}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <h5>UPDATE USER STATUS</h5>
                    {selectedUser && <UpdateStatus user={selectedUser} refetch={refetch} setRefetch={setRefetch} />}
                </Box>
            </Modal>
    
        </div>
    );
};

export default AllUsersList;
