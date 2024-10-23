import { useParams } from "react-router-dom";
import useAxiosSecure from "../../app/hooks/useAxiosSecure";

interface Message {
    companyName: string;
    createdAt: string;
    details: string;
    name: string;
    phone: string;
    readStatus: string;
    updatedAt: string;
    _id: string;
}
interface MessageCardProps {
    message: Message;
    setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: boolean
}

const MessageCard: React.FC<MessageCardProps> = ({ message, setRefetch, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams<{ id: string }>();

    const { companyName, details, name, phone, readStatus, _id } = message;
    const handleUpdate = async () => {
        try {
            await axiosSecure.patch(`/messages/read-status?main=${id}&message=${_id}`, {
                readStatus: "read",
            });
            setRefetch(!refetch)
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };
    return (
        <div className=" rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
            <div className="md:flex items-center">
                <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                    <i className="bx bx-error text-3xl">
                        &#9888;
                    </i>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                    <p className="font-bold">{companyName}</p>
                    <p className="font-bold">{name}</p>
                    <p className="text-sm text-gray-700 mt-1">{phone} </p>
                    <p className="text-sm text-gray-700 mt-1">{details} </p>
                </div>
            </div>
            <div className="text-center md:text-right mt-4 md:flex md:justify-end">

                <button onClick={handleUpdate} id="confirm-cancel-btn" className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 shadow-2xl border-2 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
                    {readStatus === "unread" ? "Waiting" : "Confirmed"}
                </button>
            </div>
        </div>
    );
};

export default MessageCard;