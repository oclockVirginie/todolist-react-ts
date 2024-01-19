import { createAsyncThunk } from '@reduxjs/toolkit';
import ICategory from '../@types/Category';
import axiosInstance from "./ApiBase";


/**
 * On définit ici les actions suivantes :
 *
 * - actionLoadCategories : charge les catégories
 * - actionDeleteCategory : supprime une catégorie
 * - actionAddCategory : ajoute une catégorie
 *
 */
export const actionLoadCategories = createAsyncThunk<ICategory[]>(
    'LOAD_CATEGORIES',
    async () => {
        const result = await axiosInstance.get('category');
        return result.data;
    }
);

export const actionAddCategory = createAsyncThunk<ICategory[],ICategory>(
    'ADD_CATEGORY',
    async (category) => {
        const json = JSON.stringify({  label: category.label , color : category.color});
        const result = await axiosInstance.post('category', json);
        return result.data;
    }
);
export const actionDeleteCategory = createAsyncThunk<ICategory[], number>(
    'DELETE_CATEGORY',
    async (categoryId) => {
        const result = await axiosInstance.delete(`category/${categoryId}`);
        return result.data;
    }
);


