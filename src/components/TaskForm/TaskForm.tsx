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

    useEffect(() => {
        const inputElem = myInputRef.current as HTMLInputElement;
        inputElem.focus();
        dispatch(actionLoadCategories());

    }, []);


    const enableButton = () => {
        setButtonDisabled(false);
    };

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
