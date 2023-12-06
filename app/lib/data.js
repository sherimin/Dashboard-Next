import { User } from "./models";
import { connectToDB } from "./utils";

const fetchUsers = async () => {
    try {
        connectToDB();
        const users = await User.find();
        return users;
    } catch(error) {
        console.log('Error in DB: ', error);
        throw new Error("Failed to fetch users.")
    }
}

export default fetchUsers