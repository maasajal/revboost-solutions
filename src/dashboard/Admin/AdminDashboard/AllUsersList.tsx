import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../../app/features/getAllUsers/fetchAllUsersAction";
import useAxiosSecure from "../../../app/hooks/useAxiosSecure";
import { AppDispatch, RootState } from "../../../app/store/store";
import RevButton from "../../../components/RevButton";



const TABS = [
    { label: "All", value: "all" },
    { label: "Member", value: "monitored" },
    { label: "Admin", value: "unmonitored" },
];

const AllUsersList: React.FC = () => {
    const axiosSecure = useAxiosSecure();
    const [activeTab, setActiveTab] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const dispatch = useDispatch<AppDispatch>();
    const { users, loading } = useSelector((state: RootState) => state.allUsers);
 

    useEffect(() => {
        dispatch(fetchAllUsers(axiosSecure));  // Dispatch fetchUsers with axiosSecure
    }, [dispatch, axiosSecure]);

    if (loading) return <>Loading ...</>;

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const placeholderImage = "https://via.placeholder.com/96";

    return (
        <div className="p-4">
            <div className="mb-8 flex items-center justify-between gap-8">
                <h2 className="text-xl font-semibold">RevBoost Solution Members</h2>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex border-b border-gray-300">
                    {TABS.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => setActiveTab(value)}
                            className={`py-2 px-4 border-b-2 font-medium ${activeTab === value ? "border-blue-500 text-blue-500" : "border-transparent text-gray-600"} hover:text-blue-500`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="w-full md:max-w-xs flex gap-2 items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border rounded p-2 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <IoMdSearch className="text-2xl p-1 rounded-lg bg-lightRedBg text-secondary border cursor-pointer" />
                </div>
            </div>
            <div className="mt-4 p-4 border border-gray-300 rounded overflow-x-auto">
                {filteredUsers.length === 0 ? (
                    <div>No users found</div>
                ) : (
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 text-left">Photo</th>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2 text-left">Email</th>
                                <th className="px-4 py-2 text-left">Plan</th>
                                <th className="px-4 py-2 text-left">Status</th>
                                <th className="px-4 py-2 text-left">Role</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => {
                                return (
                                    <tr key={user._id} className="hover:bg-gray-100">
                                        <td className="px-4 py-2">
                                            <img
                                                src={user.photo || placeholderImage} // Use placeholder if photo is missing
                                                alt={user.name}
                                                className="w-14 h-14 rounded-full object-cover"
                                                // onLoad={() => console.log(`Image loaded successfully for user: ${user.name}`)}
                                                onError={(e) => {
                                                    console.log(`Image load error for user: ${user.name}`);
                                                    e.currentTarget.src = placeholderImage; // Set placeholder on error
                                                }}
                                            />
                                        </td>
                                        <td className="px-4 py-2">{user.name}</td>
                                        <td className="px-4 py-2">{user.email}</td>
                                        <td className="px-4 py-2">{user.subscriptionPlan}</td>
                                        <td className="px-4 py-2">{user.subscriptionStatus}</td>
                                        <td className="px-4 py-2">{user.role}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
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
