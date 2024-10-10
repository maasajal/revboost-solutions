import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useAxiosSecure from "../../../app/hooks/useAxiosSecure";
import RevButton from "../../../components/RevButton";

// Define User interface
interface User {
    _id: string;
    name: string;
    email: string;
    subscriptionPlan: string;
    subscriptionStatus: string;
    role: string;
    photo?: string; // Optional because it may not be present
}

// Define TabType interface
interface TabType {
    label: string;
    value: string;
}

const TABS: TabType[] = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Member",
        value: "monitored",
    },
    {
        label: "Admin",
        value: "unmonitored",
    },
];

const AllUsersList: React.FC = () => {
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<User[]>([]);
    const [activeTab, setActiveTab] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const getAllUsers = async () => {
        const response = await axiosSecure.get("/users");
        console.log(response);
        setUsers(response.data.users);
    };

    useEffect(() => {
        getAllUsers();
        setLoading(false);
    }, []);

    if (loading) return <>Loading ...</>;

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Fallback image for users without a photo
    const placeholderImage = "https://via.placeholder.com/96"; // Use a placeholder image URL

    return (
        <div className="p-4">
            <div className="mb-8 flex items-center justify-between gap-8">
                <h2 className="text-xl font-semibold">RevBoost Solution Members</h2>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                {/* Tabs */}
                <div className="flex border-b border-gray-300">
                    {TABS.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => setActiveTab(value)}
                            className={`py-2 px-4 border-b-2 font-medium ${activeTab === value ? "border-blue-500 text-blue-500" : "border-transparent text-gray-600"
                                } hover:text-blue-500`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Search Input */}
                <div className="w-full md:max-w-72 flex gap-2 items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border rounded p-2 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <IoMdSearch className="text-4xl p-1 rounded-lg bg-lightRedBg text-secondary border cursor-pointer" />
                </div>
            </div>

            {/* User List */}
            <div className="mt-4 p-4 border border-gray-300 rounded">
                {filteredUsers.length === 0 ? (
                    <div>No users found</div>
                ) : (
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Photo</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Plan</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-100">
                                    <td className="px-4 py-2">
                                        <img
                                            src={user.photo || placeholderImage}
                                            alt={user.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = placeholderImage; // Set the placeholder on error
                                            }}
                                        />
                                    </td>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.subscriptionPlan}</td>
                                    <td className="px-4 py-2">{user.subscriptionStatus}</td>
                                    <td className="px-4 py-2">{user.role}</td>
                                    <td className="px-4 py-2">
                                        <RevButton name="View" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-gray-300 p-4 mt-4">
                <span>Page 1 of 10</span>
                <div className="flex gap-2">
                    <RevButton name="Previous" />
                    <RevButton name="Next" />
                </div>
            </div>
        </div>
    );
};

export default AllUsersList;
