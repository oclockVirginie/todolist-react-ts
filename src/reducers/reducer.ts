import { createAction, createReducer } from '@reduxjs/toolkit';
import ITask from '../@types/task';
import {
    actionAddTask,
    actionDeleteTask,
    actionLoadTasks,
} from '../middlewares/apiTasks';
import {actionAddCategory, actionDeleteCategory, actionLoadCategories} from "../middlewares/apiCategories";
import ICategory from "../@types/Category";
import {actionAddUser} from "../middlewares/apiUser";
import IUser from "../@types/User";

interface IState {
    tasks: ITask[];
    categories : ICategory[];
    user: IUser;
}

const initialState: IState = {
    tasks: [],
    categories: [],
    user: {id:-1,username:"",password:""}
};



export const setTasks = createAction('SET_TASKS');

const reducer = createReducer(initialState, (builder) => {
    builder
        //TASKS
        .addCase(actionLoadTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
        })
        .addCase(actionDeleteTask.fulfilled, (state, action) => {
            state.tasks = action.payload;
        })
        .addCase(actionAddTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.concat(action.payload );
        })


        //CATEGORIES
        .addCase(actionLoadCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
        .addCase(actionAddCategory.fulfilled, (state, action) => {
            console.log(action.payload);
            state.categories = state.categories.concat(action.payload );
        })
        .addCase(actionDeleteCategory.fulfilled, (state, action) => {
            state.categories = action.payload;
        })

        //USER
        .addCase(actionAddUser.fulfilled, (state, action) => {
            console.log(action.payload);
            state.user = action.payload ;
        })



});

export default reducer;
