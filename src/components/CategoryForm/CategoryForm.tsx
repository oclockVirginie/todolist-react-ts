import { useState } from 'react';
import {useAppDispatch} from '../../hooks/redux';
import {actionAddCategory} from "../../middlewares/apiCategories";
import ICategory from "../../@types/Category";
import InputColor from 'react-input-color';

function CategoryForm() {
    const [inputValueLabel, setInputValueLabel] = useState('');
    const [inputColor, setinputColor] = useState('#5e72e4');

    const dispatch = useAppDispatch();

    return (
        <form className="todo-form"
              onSubmit={(event) => {
                  event.preventDefault();
                  // au submit du form, on demande à ce que la nouvelle tache soit ajoutée coté back puis dans le state

                  const addCategoryInput = {
                      id : 0,
                      label: inputValueLabel,
                      color: inputColor,
                  }
                  /**
                   * on crée un objet addCategoryInput qui contient les données de la category à ajouter
                   * et on utilise le dispatch pour demander l'ajout de la category à l'api
                   */
                  dispatch(actionAddCategory(addCategoryInput));
                  setInputValueLabel('');
              }}
        >
            <input

                type="text"
                className="todo-input"
                placeholder="Ajouter une categorie"
                value={inputValueLabel}
                onChange={(event) => {
                    setInputValueLabel(event.target.value);
                }}
            />
            <InputColor
                initialValue="#5e72e4"
                onChange={(event) => {
                    setinputColor(event.hex);
                }}
                placement="right"
            />
            <button  className="todo-button">Ajouter</button>
        </form>
    );
}

export default CategoryForm;
