import css from './template.module.css'
import { useEffect, useState } from 'react';
import { api } from './../../../api';
import { useParams } from 'react-router-dom';
import { games } from '../../../types';

type Props = {
    setCurrentPAGE: React.Dispatch<React.SetStateAction<number>>
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

export const AllPosts = ({setCurrentPAGE, query, setQuery}: Props) => {
    const[games, setGames] = useState<games[]>([])
    const { id } = useParams();
    const idParse = parseInt(id as string)

    useEffect(() => {
      let request = async () => {
        let json = await api.GetAll(0, query, idParse, 0)
        setGames(json.games)
      }
      request() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [games, query]) 
    
    const handleDelete = async (key: number) => {
        console.log(games[key].link)
        await api.DeletePost(games[key].link)
    }


    
    return (

        <div className={css.postsBODY}>
            
            {games.map((item, key) => (
                <div key={key} className={css.post}>
                    <img src={item.img} alt="" />
                    <h2>{item.title}</h2>
                    <div className={css.postBUTTONS}>
                        <button onClick={()=> handleDelete(key)} style={{backgroundColor:'#d95457'}}>Delete</button>
                
                    </div>
                </div>
                
                
            ))}
            
        </div>
        
    )
}
