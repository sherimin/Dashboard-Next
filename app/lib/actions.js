import { User } from "./models";
import { connectToDB } from "./utils";

const addUser = async (formData) => {
    "use server"

    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newUser = new User({
            username, 
            email, 
            password, 
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
}

export default addUser