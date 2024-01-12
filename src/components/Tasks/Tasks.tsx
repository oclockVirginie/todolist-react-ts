import ITask from '../../@types/task';
import Task from "../Task/Task";
import TaskForm from "../TaskForm/TaskForm";
import React, {useEffect, useState} from "react";
import {actionLoadTasks} from "../../middlewares/apiTasks";
import {actionLoadCategories} from "../../middlewares/apiCategories";
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

    // const tasksGroupByCat = tasks.reduce((acc, task) => {
    //     if (acc[task.category.label]) {
    //         acc[task.category.label].push(task);
    //     } else {
    //         acc[task.category.label] = [task];
    //     }
    //     return acc;
    // }   , {} as {[key: string]: ITask[]});


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
            {/*{*/}
            {/*    Object.keys(tasksGroupByCat).map((cat) =>*/}
            {/*        tasksGroupByCat[cat].map((item) => (*/}
            {/*            <>*/}
            {/*                <div>{item.category.label}</div>*/}
            {/*                <Task key={item.id} task={item}/>*/}
            {/*            </>*/}
            {/*        ))*/}
            {/*    )*/}
            {/*}*/}
        </div>
    );
}

export default Tasks;
