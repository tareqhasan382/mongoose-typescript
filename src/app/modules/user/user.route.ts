import express from "express";
import { createUser, getAdmin, getUserById, getUsers } from "./user.controller";
import { getAllAdminUsersDB } from "./user.service";

const router = express.Router();

 router.get('/',getUsers); // createUser from controller

 router.post('/create-user', createUser);

 router.get('/admins', getAdmin);

 router.get('/:id', getUserById);

 

export default router;