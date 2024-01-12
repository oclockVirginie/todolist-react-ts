import ICategory from "./Category";

export default interface ITask {
    id: number;
    label: string;
    category: ICategory;
}
