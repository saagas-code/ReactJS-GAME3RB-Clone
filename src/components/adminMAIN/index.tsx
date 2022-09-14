import css from './template.module.css'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useContext, useState, useEffect } from 'react';
import { AllPosts } from './../admin Components/allPosts/index';
import { NewPosts } from './../admin Components/newPosts/index';
import { NewCategory } from './../admin Components/newCategory/index';
import { category } from '../../types';
import { api } from './../../api';

type Props = {
    currentPage: number,
    setCurrentPAGE: React.Dispatch<React.SetStateAction<number>>
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>
}


export const AdminMain = ({currentPage, setCurrentPAGE, query, setQuery}: Props) => {
    const auth = useContext(AuthContext)
    const[AllCategory, setAllCATEGORY] = useState<category[]>([])

    useEffect(() => {
        let request = async () => {
          let json = await api.GetAllCategory()
          setAllCATEGORY(json.list)
        }
  
        request()
      }, [AllCategory])
   
    return (

        <main className={css.mainADMIN}>
            <div className={css.mainAdminCONTAINER}>

                <div className={css.pageDIRETORY}>
                    <span>Dashboard / </span>
                    {currentPage === 0 &&
                        <span style={{color:'#5048ff'}}>All Posts</span>
                    }

                    {currentPage === 2 &&
                        <span style={{color:'#5048ff',cursor:'pointer'}}>New Posts</span>
                    }
                    {currentPage === 3 &&
                        <span style={{color:'#5048ff',cursor:'pointer'}}>New Category</span>
                    }
                </div>

                <div className={css.adminMAIN}>
                    
                    {currentPage === 0 &&
                        <AllPosts query={query} setQuery={setQuery} setCurrentPAGE={setCurrentPAGE} />
                    }
    
                    {currentPage === 2 &&
                        <NewPosts setAllCATEGORY={setAllCATEGORY} AllCategory={AllCategory} />
                    }
                    {currentPage === 3 &&
                        <NewCategory setAllCATEGORY={setAllCATEGORY} AllCategory={AllCategory} />
                    }
                    
                    
                </div>
            </div>
        </main>
        
    )
}

