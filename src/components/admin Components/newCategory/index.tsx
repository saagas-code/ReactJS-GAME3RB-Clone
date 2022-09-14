import css from './template.module.css'
import { useState, useEffect } from 'react';
import { category } from '../../../types';
import { api } from './../../../api';


type Props = {
    AllCategory: category[],
    setAllCATEGORY: React.Dispatch<React.SetStateAction<category[]>>
}

export const NewCategory = ({AllCategory, setAllCATEGORY}: Props) => {
    const[newCategory, setNewCategory] = useState('')

    const handleAddCategory = async () => {
        await api.AddCategory(newCategory)
    }

    const handleDelete = async (key: number) => {
        let category = AllCategory[key].category
        await api.DeleteCategory(category)
    }
    
    return (

        <div>
            <div className={css.newCategoryFORM}>
                <h1>Add a New Category</h1>
                <input onChange={e => setNewCategory(e.target.value)} placeholder='Choose a new category' type="text" />
                <button onClick={handleAddCategory}>Add</button>
            </div>
            <div className={css.categoryList}>
                <ol>
                    {AllCategory.map((item, key) => (
                        <span><li>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</li> <button onClick={()=> handleDelete(key)}>Delete</button></span>
                    ))}
                </ol>
            </div>
        </div>
        
    )
}
