import { IUser } from "./user.interface";
import { User } from "./user.model";

// create a instance database query
export const createUserToDB = async (payload:IUser) :Promise<IUser> => {

    const user = new User(payload);
  /*
   //   User  from model
    const user = await new User({
        id:"128",
        role:"student",
        password:"asd123",
        name:{
            firstName:"Test",
            lastName:"Hasan",
        },
        dateOfBirth:"04/02/2000",
        gender:"male", // enum
        email:"test@gmail.com",
        contactNo:"01989342790",
      });
  */
      await user.save(); // built in instance methods  
      console.log(user);  
      console.log (user.fullName());  // custom in instance methods
      return user;

};

export const getUsersFromDB = async ():Promise<IUser[]> => {
    const users = await User.find();
    return users;
};

export const getUserByIdFromDB = async (payload:string):Promise<IUser | null> => {
    const user = await User.findOne({id:payload},{name:1,email:1});
    return user;
};



export const getAllAdminUsersDB = async() => {
    const admins = await User.getAdminUsers(); 
    return admins;

}
// instance methods => instance er methods
// class => instance + methods => instance methods