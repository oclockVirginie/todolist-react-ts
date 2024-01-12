import { useState } from 'react';
import {TiEdit} from 'react-icons/ti'
import {RiCloseCircleLine} from "react-icons/ri";
import ITask from "../../@types/task";
import {actionDeleteTask} from "../../middlewares/apiTasks";
import { useAppDispatch } from '../../hooks/redux';

interface TaskProps {
    task: ITask;
}
function Task({ task }: TaskProps) {

    const dispatch = useAppDispatch();

    return  (
        <div style={{backgroundColor: task.category.color }} className="todo-row" >
            <div key={task.id} onClick={() => console.log('rien')}>
                {task.label}
                {task.category.label}
            </div>

            <div className="icons">
                <TiEdit
                    onClick={() => console.log('edit')}
                    className='edit-icon'
                />
                <RiCloseCircleLine
                    onClick={() => {
                        // au click on demande à ce que la tache soit supprimée coté back puis dans le state
                        dispatch(actionDeleteTask(task.id));
                    }}
                    className='delete-icon'
                />
            </div>
        </div>
    );
}

export default Task;
