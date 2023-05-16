import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAllAdminUsersDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

 export  const getUsers = async (req:Request, res:Response,next:NextFunction) => {

    const user = await getUsersFromDB(); // createUserToDB from  service
    res.status(200).json({

        status:"success",
        data:user,
    });

 };

 export  const createUser = async (req:Request, res:Response,next:NextFunction) => {
    const data = req.body;
    const user = await createUserToDB(data); // createUserToDB from  service
    res.status(200).json({

        status:"success",
        data:user,
    });

 };


 export  const getUserById = async (req:Request, res:Response,next:NextFunction) => {
    const {id} = req.params;
    const user = await getUserByIdFromDB(id); // createUserToDB from  service
    res.status(200).json({

        status:"success",
        data:user,
    });

 };

 
 export  const getAdmin = async (req:Request, res:Response,next:NextFunction) => { 
    const user = await getAllAdminUsersDB(); // createUserToDB from  service
    res.status(200).json({

        status:"success",
        data:user,
    });

 };