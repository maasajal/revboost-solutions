import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent
import * as React from 'react';
import useAxiosSecure from '../../../app/hooks/useAxiosSecure';

interface User {
    _id: string;
    name: string;
    email: string;
    photo?: string;
    subscriptionPlan: string;
    subscriptionStatus: string;
    role: string;
}

interface PropsUser {
    user: User;
    refetch: boolean;       
    setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateStatus: React.FC<PropsUser> = ({ user, refetch, setRefetch }) => {
    const axiosSecure = useAxiosSecure()
    const [status, setStatus] = React.useState(user.subscriptionStatus || '');  

    const handleStatusChange = (event: SelectChangeEvent<string>) => {
        setStatus(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userId = user._id
        const updateStatus = status
        console.log(user)

        try {
          await axiosSecure.patch("/user-subscription-plan", { userId, updateStatus })
            setRefetch(!refetch)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputLabel id="status-select-label">Status</InputLabel>
            <div className='grid grid-cols-2 gap-2 w-full'>
                <Select
                    labelId="status-select-label"
                    className='w-full px-1 mr-3'
                    id="status-select"
                    value={status}
                    label="Status"
                    onChange={handleStatusChange}
                >
                    <MenuItem value="">
                        <em>Select status</em>
                    </MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                    <MenuItem value="deactivated">Deactivate</MenuItem>
                </Select>
                <Button type="submit" variant="contained" color="primary">Update</Button>
            </div>
        </form>
    );
};

export default UpdateStatus;
