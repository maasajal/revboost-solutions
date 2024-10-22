import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../app/hooks/useAxiosSecure";
import MessageCard from "./MessageCard";

interface Message {
    companyName: string;
    createdAt: string;
    details: string; // Assuming this is the same as 'content'
    name: string;
    phone: string;
    readStatus: string;
    updatedAt: string;
    _id: string;
}

interface MessageDetails {
    createdAt: string;
    email: string;
    messages: Message[];
    updatedAt: string;
    _id: string;
    __v: number;
}

const CustomerMessageDetails = () => {
    const { id } = useParams<{ id: string }>();
    const axiosSecure = useAxiosSecure();
    const [messageDetails, setMessageDetails] = useState<MessageDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refetch, setRefetch] = useState(true)

    useEffect(() => {
        const fetchMessageDetails = async () => {
            try {
                const response = await axiosSecure.get(`/messages/${id}`);
                setMessageDetails(response.data); // Ensure response.data matches MessageDetails structure
                setLoading(false);
            } catch (err) {
                console.error("Error fetching message details:", err);
                setError("Error fetching message details.");
                setLoading(false);
            }
        };

        fetchMessageDetails();
    }, [id, refetch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!messageDetails || !messageDetails.messages.length) return <div>No messages found.</div>;

    return (
        <section>
            <div className="flex items-center z-50">
                <div className="relative px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {messageDetails.messages.map((message: Message, index) => (
                        <MessageCard key={index} message={message} setRefetch={setRefetch} refetch={refetch} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerMessageDetails;
