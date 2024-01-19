import ITask from '../../@types/task';
import Task from "../Task/Task";
import TaskForm from "../TaskForm/TaskForm";
import React, {useEffect, useState} from "react";
import {actionLoadTasks} from "../../middlewares/apiTasks";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

interface TasksProps {
    tasks: ITask[];
}


function Tasks() {

    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.tasks);

    useEffect(
        () => {
            // au premier chargement du composant on demande le chargement des données
            dispatch(actionLoadTasks());
        },
        []
    );

    const [tasksShow, setTasksShow] = useState<ITask[] >(tasks);
    const [text, setText] = useState<string>("");

    useEffect(() => {
        setTasksShow(tasks);
    }   , [tasks]);

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
