import { HydratedDocument, Model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
   export interface IUser{
    id:string;
    role:"student";
    password:string;
    name:{
        firstName:string;
        middleName?:string;
        lastName:string;
    };
    dateOfBirth?:string;
    gender:"male" | "female"; // enum
    email?:string;
    contactNo:string;     

};

// Put all user instance methods in this interface:
   export interface IUserMethods {
    fullName(): string;
  };
// static
//  export interface UserModel extends Model<IUser> {
//     getAdminStaticMethod(): IUser[];
//   };

export  interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }