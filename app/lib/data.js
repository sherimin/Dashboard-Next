import { User, Product } from "./models";
import { connectToDB } from "./utils";

//fetch all users and display them on the users page;
export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;

    try {
        connectToDB();
        const count = await User.find({ username:{ $regex:regex } }).count();

        const users = await User.find({ username:{ $regex:regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {count, users};
    } catch(error) {
        console.log('Error in DB: ', error);
        throw new Error("Failed to fetch users.")
    }
};

//fetch all products and display them on the products page;
export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 4;

    try {
        connectToDB();
        const count = await Product.find({ title:{ $regex:regex } }).count();

        const products = await Product.find({ title:{ $regex:regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {count, products};
    } catch(error) {
        console.log('Error in DB: ', error);
        throw new Error("Failed to fetch products.")
    }
};

// fetch single user for updating user info
export const fetchUser = async (id) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch(error) {
        console.log('Error in fetchUser: ', error);
        throw new Error("Failed to fetch user.")
    }
};

// fetch single product for updating product info
export const fetchProduct = async (id) => {
    try {
        connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch(error) {
        console.log('Error in fetchProduct: ', error);
        throw new Error("Failed to fetch product.")
    }
};
