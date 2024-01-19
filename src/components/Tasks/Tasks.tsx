import ITask from '../../@types/task';
import Task from "../Task/Task";
import TaskForm from "../TaskForm/TaskForm";
import React, {useEffect, useState} from "react";
import {actionLoadTasks} from "../../middlewares/apiTasks";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";


/**
 * Composant Tasks
 *  - il est composé de 2 sous composants :
 *    - TaskForm : formulaire de création d'une tâche
 *    - Task : composant qui affiche une tâche
 *    et d'un input :
 *    - input : permet de filtrer les tâches par catégorie
 *
 *    on utilise le hook useEffect pour demander le chargement des données au premier chargement du composant afin
 *    de récupérer les tâches à partir de l'api et de les stocker dans le state.
 */
function Tasks() {

    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.tasks);

    /**
     * useEffect permet de demander le chargement des données au premier chargement du composant
     * on utilise le dispatch pour demander le chargement des données à l'api
     * Dans notre cas on demande le chargement des tâches et cela me sert à initialisé tasksShow avec tasks
     * tasksShow est le tableau de tâches qui sera affiché dans le composant afin de pouvoir filtrer les tâches
     */
    useEffect(
        () => {

            dispatch(actionLoadTasks());
        },
        []
    );

    const [tasksShow, setTasksShow] = useState<ITask[] >(tasks);
    const [text, setText] = useState<string>("");

    /**
     * useEffect permet de mettre à jour tasksShow à chaque fois que tasks est modifié
     * [tasks] est le tableau de dépendances, si tasks est modifié alors le code du useEffect est exécuté
     * Cela est necessaire lors de l'ajout ou de la suppression d'une tâche afin de mettre à jour tasksShow et
     * de mettre à jour l'affichage des tâches
     */
    useEffect(() => {
        setTasksShow(tasks);
    }   , [tasks]);

    /**
     * filterTask permet de filtrer les tâches par le label de la catégorie
     * Lorsque l'on appel setTasksShow on demande à React de mettre à jour tasksShow et de mettre à jour l'affichage
     */
    const filterTask = () => {

        const findTasks =
            tasks && tasks?.length > 0
                ? tasks?.filter((task) => task?.category.label.toLowerCase().includes(text.toLowerCase()))
                : [];
        setTasksShow(findTasks);
    };

    return (

        <div>
            <TaskForm/>
            <input
                type="text"
                placeholder="Search Task....."
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    setTasksShow(tasks);
                }}
            />
            <button onClick={filterTask}>
                Search Task
            </button>
            {tasksShow.map((item) => (
                <Task key={item.id} task={item}/>
            ))}

        </div>
    );
}

export default Tasks;
