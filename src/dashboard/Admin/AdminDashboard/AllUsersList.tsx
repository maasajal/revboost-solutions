import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useAxiosSecure from "../../../app/hooks/useAxiosSecure";

interface User {
    id: string;
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

const AllUsersList: React.FC = () => {
    const axiosSecure = useAxiosSecure();
    const [activeTab, setActiveTab] = useState<string>("all");
    const [usersData, setUsersData] = useState<User[]>([]);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false)

    // Fetch users based on the active tab and email
    const getUsers = async () => {
        setLoading(true)
        try {
            const params = {
                tab: activeTab,
                email: email || undefined,
                role: activeTab !== "all" ? activeTab : undefined,
            };
            const response = await axiosSecure.get("/users", { params });
            setUsersData(response.data);
            console.log(response.data);
            setLoading(false)

        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        getUsers(); // Fetch users whenever activeTab or email changes
    }, [activeTab, email]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailInput = (e.target as HTMLFormElement).elements.namedItem("email") as HTMLInputElement;
        setEmail(emailInput.value);
    };
    const handleActive = (value: string) => {
        setActiveTab(value)
        setEmail("")
    };

    if (!usersData.length) return <>Not found</>
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
                            onClick={() => handleActive(value)}
                            className={`py-2 px-4 border-b-2 font-medium ${activeTab === value ? "border-blue-500 text-blue-500" : "border-transparent text-gray-600"} hover:text-blue-500`}
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
            {loading ? "Loading" : <div className="mt-4 p-4 border border-gray-300 rounded overflow-x-auto">
                {usersData.length === 0 ? (
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
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-100">
                                    <td className="px-4 py-2">
                                        <img
                                            src={user.photo || placeholderImage}
                                            alt={user.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                            onError={(e) => {
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
                            ))}
                        </tbody>
                    </table>
                )}
            </div>}

        </div>
    );
};

export default AllUsersList;
