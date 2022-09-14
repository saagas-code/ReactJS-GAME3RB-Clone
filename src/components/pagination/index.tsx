import css from './template.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


type Props = {
    limit: number,
    total: number,
    pagina: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}



export const Pagination = ({limit, total, pagina, setPage}: Props) => {
    const MAX_ITEMS = 5
    const MAX_LEFT = (MAX_ITEMS - 1) / 2;

    const current = pagina + 1
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 1)
    const navigate = useNavigate()

    useEffect(() => {
    console.log('limit :', limit)
    console.log('total :', total)
    console.log('pages :', pages)
    
    }, [])
    

    const { category } = useParams();
    const { id } = useParams();
    const idParse = parseInt(id as string)

    const handlePage = (page: number): any => {
        setPage(page)
    }

    /*
    const handleUrl = (page: number) => {
        navigate(`/games/${page}`)
    }
    */
    return (

        <ul className={css.pagesContainer}>
            {Array.from({length: Math.min(MAX_ITEMS, pages) })
                .map((_, index)=> index + first )
                .map((page)=> (
                    <li key={page}>
                        <button onClick={e => 
                            {
                                
                                if(!category) {
                                    {navigate(`/page/${page}`)}
                                }
                                if(category) {
                                    {navigate(`/category/${category}/page/${page}`)}
                                }
                                {handlePage(page)}
                            }
                        }  
                        className={
                            page === idParse ? css.test : ''
                        }
                        >
                            {page}
                        </button>
                    </li>
            ))}
        </ul>
        
    )
}