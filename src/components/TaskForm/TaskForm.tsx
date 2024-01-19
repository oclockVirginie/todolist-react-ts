import { useEffect, useRef, useState } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {actionAddTask, actionLoadTasks} from '../../middlewares/apiTasks';
import {actionLoadCategories} from "../../middlewares/apiCategories";
import Select from 'react-select'
import ICategory from "../../@types/Category";

function TaskForm() {
    const [inputValueLabel, setInputValueLabel] = useState('');
    const [inputValueCategory, setInputValueCategory] = useState<ICategory>({id: 33, label: 'default', color: ''});
    const [defaultCategory, setDefaultCategory] = useState<ICategory>({id: 0, label: 'choisir', color: ''});
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    const myInputRef = useRef<null | HTMLInputElement>(null);
    const categories = useAppSelector((state) => state.categories);
    const dispatch = useAppDispatch();

    /**
     * useEffect permet de demander le chargement des données au premier chargement du composant
     * on utilise le dispatch pour demander le chargement des données à l'api
     * on recupere les categories pour les afficher dans le select
     *
     */
    useEffect(() => {
        dispatch(actionLoadCategories());
    }, []);


    /**
     * juste une fonction empêcher la sousmission du formulaire si le champ category n'est pas rempli
     */
    const enableButton = () => {
        setButtonDisabled(false);
    };

    /**
     * formatOptionLabel permet de formatter l'affichage des options du select
     * @param cat
     */
    const formatOptionLabel = (cat : ICategory) => (
        <div style={{ display: "flex" }}>
            <div style={{ width: "100%", height:"100%", backgroundColor: "white", color:cat.color}}>
                {cat.label}
            </div>
        </div>
    );

    return (
        <form className="todo-form"
            onSubmit={(event) => {
                event.preventDefault();
                  // au submit du form, on demande à ce que la nouvelle tache soit ajoutée coté back puis dans le state

                /**
                 * on crée un objet tasksAddTaskInput qui contient les données de la tâche à ajouter
                 * on utilise le dispatch pour demander l'ajout de la tâche à l'api
                 * et on vide l'input
                 */
                const tasksAddTaskInput = {
                        id : 0,
                        label: inputValueLabel,
                        category: inputValueCategory,
                  }
                dispatch(actionAddTask(tasksAddTaskInput));
                setInputValueLabel('');
            }}
        >
            <input
                ref={myInputRef}
                type="text"
                className="todo-input"
                placeholder="Ajouter une tâche"
                value={inputValueLabel}
                onChange={(event) => {
                    setInputValueLabel(event.target.value);
                }}
            />
            <Select className="select-category"
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: 'hotpink',
                            primary: 'white',
                        },
                    })}
                    formatOptionLabel={formatOptionLabel}
                    options={categories}
                    defaultValue={defaultCategory as ICategory}
                    onChange={(category) => {
                        setInputValueCategory(category as ICategory);
                        enableButton();
                    }}
            />
            <button disabled={isButtonDisabled} className="todo-button">Ajouter</button>
        </form>
    );
}

export default TaskForm;
