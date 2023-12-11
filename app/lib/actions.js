import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";

const addUser = async (formData) => {
    "use server"

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

export default addUser