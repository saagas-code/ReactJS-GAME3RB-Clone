import css from './template.module.css'
import { Logo } from '../components/logo/index';
import { Menu } from '../components/menu/index';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from './../api';
import { games } from '../types';
import { MainCategory } from './../components/mainCategory/index';

export const HomeCategory = () => {
    const[games, setGames] = useState<games[]>([])
    const[gamesMOST, setGamesMOST] = useState<games[]>([])
    const[length, setLength] = useState<games[]>([])

    const { category, id } = useParams();
    const idParse = parseInt(id as string) // eslint-disable-next-line react-hooks/exhaustive-deps
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(0)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        localStorage.removeItem('token')
        let request1 = async () => {
            if(!id) {
                let json = await api.GetCategory(category as string)
                setGames(json.games)
                setLength(json.length)
            }
            if(id) {
                let json = await api.GetCategoryPerPage(category as string, idParse - 1)
                setGames(json.games)
                setLength(json.length)
            }
        }
        let request2 = async () => {
            let json = await api.GetAllMost()
            setGamesMOST(json.games)

        }

        request1()
        request2() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, id, games]) 


    return (
        <div className={css.Body}>
            <Logo 
                query={query} 
                setQuery={setQuery}
                setPage={setPage}
            />
            <Menu/>
            <MainCategory
                offset={offset} 
                setOffset={setOffset} 
                page={page} 
                setPage={setPage} 
                games={games}
                length={length}
                gamesMOST={gamesMOST}
            />
        </div>
    )
}