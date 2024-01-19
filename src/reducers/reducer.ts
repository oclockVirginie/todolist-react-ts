import { createReducer } from '@reduxjs/toolkit';
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

/**
 * On définit ici le type de l'état global de l'application.
 * Il est composé de trois propriétés :
 * - tasks : un tableau de tâches
 * - categories : un tableau de catégories
 * - user : l'utilisateur connecté
 *
 */
interface IState {
    tasks: ITask[];
    categories : ICategory[];
    user: IUser;
}

/**
 * On définit ici l'état initial de l'application.
 * Il est composé de trois propriétés :
 * - tasks : un tableau vide
 * - categories : un tableau vide
 * - user : un objet vide
 *
 */
const initialState: IState = {
    tasks: [],
    categories: [],
    user: {id:-1,username:"",password:""}
};


/**
 * On définit ici le reducer de l'application.
 *  On y retrouve l'ensemble des actions possibles sur l'état global de l'application.
 *  Pour chaque action, on définit une fonction qui prend en paramètre l'état global de l'application et l'action en cours.
 *  On retourne ensuite le nouvel état global de l'application.
 *  On utilise ici la fonction createReducer de redux-toolkit qui permet de définir un reducer de manière plus simple.
 *
 *  On définit ici les actions suivantes :
 *  - actionLoadTasks : charge les tâches
 *  - actionDeleteTask : supprime une tâche
 *  - actionAddTask : ajoute une tâche
 *  - actionLoadCategories : charge les catégories
 *  - actionDeleteCategory : supprime une catégorie
 *  - actionAddCategory : ajoute une catégorie
 *  - actionAddUser : ajoute un utilisateur
 *
 *
 */
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
