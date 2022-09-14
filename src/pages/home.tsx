import css from './template.module.css'
import { Logo } from '../components/logo/index';
import { Menu } from '../components/menu/index';
import { Main } from '../components/main/index';
import { useEffect, useState } from 'react';
import { games } from '../types';
import { api } from '../api';
import { useParams } from 'react-router-dom';



export const Home = () => {
    const[games, setGames] = useState<games[]>([])
    const[gamesMOST, setGamesMOST] = useState<games[]>([])
    const[length, setLength] = useState<games[]>([])
    const { id } = useParams();
    const idParse = parseInt(id as string)

    const [query, setQuery] = useState('')
    const [page, setPage] = useState(0)
    const [offset, setOffset] = useState(0)
    const search = localStorage.getItem('search')

    
    useEffect(() => {
    
        if(search) {
            setQuery(search)
            localStorage.removeItem('search')
        }

        let request1 = async () => {
            
            let json = await api.GetAll(page, query, idParse, 4)
            setGames(json.games)
            setLength(json.length)
        
        }
        let request2 = async () => {
            let json = await api.GetAllMost()
            setGamesMOST(json.games)

        }

        request1()
        request2() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [games, page, query, id, search])
    

    return (
        <div className={css.Body}>
            <Logo 
                query={query} 
                setQuery={setQuery}
                setPage={setPage}
            />
            <Menu
            />
            <Main 
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
