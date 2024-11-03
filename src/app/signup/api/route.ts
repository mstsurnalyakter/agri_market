import { connectDB } from "@/lib/connectDB";
import bcrypt  from "bcrypt";

interface User{
    name:string,
    email:string,
    photo:string,
    password:string,
    [key:string]:any

}

export const POST = async (request:Request) =>{
    const newUser:User = await request.json();
    try {
        const db = await connectDB();
        const userCollection = db?.collection("users");
        const exist = await userCollection?.findOne({email:newUser.email});
        if (exist) {
            return Response.json(
                {message:"User Already Exist!"},
                {status:304}
            );
        }
        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const resp= await userCollection?.insertOne({...newUser,password:hashPassword});
        return Response.json(
            {message:"Sign Up Successful"},
            {status:200}
        )
    } catch (error) {
        return Response.json(
          {message:"Something Went Wrong",error},
          {status:500}
        )
    }

}
// 80-8