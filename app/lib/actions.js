"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";

const addUser = async (formData) => {

    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username, 
            email, 
            password: hashedPassword, 
            phone, 
            address, 
            isAdmin, 
            isActive,
        });

        await newUser.save();
        
    } catch (error) {
        console.log(error);
        throw new Error("Fail to add new user.");  
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

const addProduct = async (formData) => {

    const { title, category, price, stock, color, size, desc } = Object.fromEntries(formData);

    try {
        connectToDB();

        const newProduct = new Product({
            title, 
            category, 
            price, 
            stock, 
            color, 
            size, 
            desc,
        });

        await newProduct.save();
        
    } catch (error) {
        console.log(error);
        throw new Error("Fail to add new product.");  
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}


const deleteUser = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await User.findByIdAndDelete(id);
        
    } catch (error) {
        console.log(error);
        throw new Error("Fail to delete user.");  
    }
    revalidatePath("/dashboard/users");
}



const deleteProduct = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await Product.findByIdAndDelete(id);
        
    } catch (error) {
        console.log(error);
        throw new Error("Fail to delete product.");  
    }
    revalidatePath("/dashboard/products");
}


export { addUser, addProduct, deleteProduct, deleteUser }