import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from "./ApiBase";
import IUser from "../@types/User";

/**
 * On définit ici les actions suivantes :
 *  - actionAddUser : ajoute un utilisateur
 *
 */

export const actionAddUser = createAsyncThunk<IUser,IUser>(
    'ADD_USER',
    async (user) => {
        const json = JSON.stringify({  username: user.username , password : user.password});
        const result = await axiosInstance.post('user/register', json);
        return result.data;
    }
);
