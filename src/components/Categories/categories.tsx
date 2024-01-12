import React, {useEffect} from "react";
import ICategory from "../../@types/Category";
import Category from "../Category/Category";
import CategoryForm from "../CategoryForm/CategoryForm";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {actionLoadCategories} from "../../middlewares/apiCategories";

interface CategoriesProps {
    categories: ICategory[];
}



function Categories() {

    const dispatch = useAppDispatch();

    const categories = useAppSelector((state) => state.categories);

    useEffect(
        () => {
            // au premier chargement du composant on demande le chargement des données
            dispatch(actionLoadCategories());
        },
        []
    );

    return (

        <div >
            <CategoryForm/>
            {categories.map((item) => (
                <Category key={item.id} category={item} />
            ))}
        </div>
    );
}

export default Categories;
