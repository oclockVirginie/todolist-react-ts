import {TiEdit} from 'react-icons/ti'
import {RiCloseCircleLine} from "react-icons/ri";
import { useAppDispatch } from '../../hooks/redux';
import ICategory from "../../@types/Category";
import {actionDeleteCategory} from "../../middlewares/apiCategories";

interface CategoryProps {
    category: ICategory;
}
function Category({ category }: CategoryProps) {

    const dispatch = useAppDispatch();

    return  (
        <div style={{backgroundColor: category.color }} className="todo-row" >
            <div key={category.id} onClick={() => console.log('rien')}>
                {category.label}
                {category.color}
            </div>

            <div className="icons">
                <TiEdit
                    onClick={() => console.log('edit')}
                    className='edit-icon'
                />
                <RiCloseCircleLine
                    onClick={() => {
                        // au click on demande à ce que la tache soit supprimée coté back puis dans le state
                        dispatch(actionDeleteCategory(category.id));
                    }}
                    className='delete-icon'
                />
            </div>
        </div>
    );
}

export default Category;
