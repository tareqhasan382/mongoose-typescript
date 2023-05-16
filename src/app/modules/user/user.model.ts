import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";  // IUser from interface

// Create a new Model type that knows about IUserMethods...
//type UserModel = Model<IUser, {}, IUserMethods>;

// 2. Create a generic Schema and model corresponding to the document interface.
const userSchema = new Schema<IUser,UserModel ,IUserMethods >({
    id:{type:String, required:true, unique:true},
    role:{type:String,required:true},
    password:{type:String, required:true},
    name: {
        firstName:{
            type:String,
            required:true,
        },
        middleName:{
            type:String,
        },
        lastName:{
            type:String,
            required:true,
        }
    },
    dateOfBirth: { type: String, required: true },
    gender: { 
        type: String, 
        enum:['male','female'],
    },
    email: { type: String},
    contactNo:{type:String, required:true},
   
  });
  // static
  userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admins = await this.find({role:"admin"});
    return admins;
  });


//
  userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });
  
// 3. Create a Model.
   export const User = model<IUser,UserModel>('User', userSchema);  // IUser from interface


