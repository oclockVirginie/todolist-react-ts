import { createAsyncThunk } from '@reduxjs/toolkit';
import ITask from '../@types/task';
import axiosInstance from "./ApiBase";

/**
 * On définit ici les actions suivantes :
 *  - actionLoadTasks : charge les tâches
 *  - actionDeleteTask : supprime une tâche
 *  - actionAddTask : ajoute une tâche
 */
export const actionLoadTasks = createAsyncThunk<ITask[]>(
    'LOAD_TASKS',
    async () => {
        const result = await axiosInstance.get('task');
        return result.data;
    }
);
export const actionAddTask = createAsyncThunk<ITask, ITask>(
    'ADD_TASK',
    async (task,inputValueCategory) => {
        const json = JSON.stringify({  label: task.label , category : task.category.id});
        const result = await axiosInstance.post('task', json);
        return result.data;
    }
);
export const actionDeleteTask = createAsyncThunk<ITask[], number>(
    'DELETE_TASK',
    async (taskId) => {
        const result = await axiosInstance.delete(`task/${taskId}`);
        return result.data;
    }
);

