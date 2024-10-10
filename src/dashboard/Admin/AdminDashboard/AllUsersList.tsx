import {
    CardBody,
    CardFooter,
    Input,
    Tab,
    Tabs,
    TabsHeader,
    Tooltip
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useAxiosSecure from "../../../app/hooks/useAxiosSecure";
import { ButtonDefault } from "../../../components/utils/ButtonDefault";
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

const TABLE_HEAD: string[] = ["Member", "Plan", "Status", "Join", ""];



const AllUsersList: React.FC = () => {
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(true)

    const [users, setUsers] = useState([])
    const getAllUsers = async () => {
        const response = await axiosSecure.get("/users")
        setUsers(response.data.users)
    }

    useEffect(() => {
        getAllUsers()
        setLoading(false)
    }, [])
    if (loading) return <>Loading ...</>
    return (
        <div>
            <div  >
                <div >
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <>RevBoost Solution Members</>
                        </div>

                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader
                                placeholder="Type here..." // Provide a placeholder value
                                onPointerEnterCapture={() => {
                                    /* handle pointer enter */
                                }}
                                onPointerLeaveCapture={() => {
                                    /* handle pointer leave */
                                }}
                            >
                                {TABS.map(({ label, value }) => (
                                    <Tab
                                        key={value}
                                        value={value}
                                        placeholder="Type here..." // Example placeholder value
                                        onPointerEnterCapture={() => {
                                            /* handle pointer enter */
                                        }}
                                        onPointerLeaveCapture={() => {
                                            /* handle pointer leave */
                                        }}
                                    >
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                        <div className="w-full md:max-w-72 flex gap-2 items-center">
                            <Input
                                label="Search"
                                onPointerEnterCapture={() => { }}
                                onPointerLeaveCapture={() => { }}
                                crossOrigin="anonymous"
                            />
                            <IoMdSearch className="text-4xl p-1 rounded-lg bg-lightRedBg text-secondary border cursor-pointer" />
                        </div>
                    </div>
                </div>

                <CardBody
                    className="overflow-scroll px-0"
                    placeholder="Type something..."
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <>{head}</>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(
                                ({ img, name, email, subscriptionPlan, role, createdAt }, index) => {
                                    const isLast = index === users.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <img src={img} alt="" className="w-14" />
                                                    <div className="flex flex-col">
                                                        <>{name}</>
                                                        <br />
                                                        <>{email}</>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <>{subscriptionPlan}</>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="w-max">
                                                    <span>{role}</span>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <>{createdAt}</>
                                            </td>
                                            <td className={classes}>
                                                <Tooltip content="Edit User">
                                                    <ButtonDefault name="Action" />
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </CardBody>

                <CardFooter
                    className="flex items-center justify-between border-t border-blue-gray-50 p-4"
                    placeholder="Footer placeholder" // Example placeholder value
                    onPointerEnterCapture={() => {
                        /* handle pointer enter */
                    }}
                    onPointerLeaveCapture={() => {
                        /* handle pointer leave */
                    }}
                >
                    <>Page 1 of 10</>
                    <div className="flex gap-2">
                        <ButtonDefault name="Previous" />
                        <ButtonDefault name="Next" />
                    </div>
                </CardFooter>
            </div>
        </div>
    );
};

export default AllUsersList;


