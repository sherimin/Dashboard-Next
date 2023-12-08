import { User } from "./models";
import { connectToDB } from "./utils";

const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 3;

    try {
        connectToDB();
        const count = await User.find({ username:{ $regex:regex } }).count();

        const users = await User.find({ username:{ $regex:regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {count, users};
    } catch(error) {
        console.log('Error in DB: ', error);
        throw new Error("Failed to fetch users.")
    }
}

export default fetchUsers