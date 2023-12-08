import { User, Product } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
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

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 3;

    try {
        connectToDB();
        const count = await Product.find({ title:{ $regex:regex } }).count();

        const products = await Product.find({ title:{ $regex:regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {count, products};
    } catch(error) {
        console.log('Error in DB: ', error);
        throw new Error("Failed to fetch products.")
    }
}
