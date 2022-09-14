import css from './template.module.css'
import { games } from '../../types';
import { api } from './../../api';
import {useNavigate, useParams } from 'react-router-dom'
import { Pagination } from './../pagination/index';
import { Link } from 'react-router-dom';
import { getDifferenceDate, now } from './../../helpers/dateFilters';

const LIMIT = 4

type Props = {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    offset: number,
    setOffset: React.Dispatch<React.SetStateAction<number>>
    games: games[]
    length: games[]
    gamesMOST: games[]
}


export const Main = ({setOffset, offset, page, setPage, games, length, gamesMOST}: Props) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const idParse = parseInt(id as string)



    const handleItemClick = async ( key: number) => {
        let tmpArray = [...games]

        const idd = games[key].link
        const clickCOUNT = games[key].counts += 1
        console.log('idd :', idd, 'clickCOUNT:', clickCOUNT)
        let json = await api.countCLICK(idd, clickCOUNT)
        console.log(json)
        if(id) {
            navigate(`/${tmpArray[key].link}`)
        }
        if(!id) {
            navigate(`/${tmpArray[key].link}`)
        }

    }

    const handleItemClickMOST = ( key: number) => {
        let tmpArray = [...gamesMOST]
        if(id) {
            navigate(`/${tmpArray[key].link}`)
        }
        if(!id) {
            navigate(`/${tmpArray[key].link}`)
        }
        
    }
    const noww = now()
    


    return (
        
        <div className={css.mainCONTAINER}>
            <div className={css.mainContainerSPACE}>
                <div className={css.mainLEFT}>

                    {games.map((item, key) => (
                        <div key={key} className={css.POST}>
                            <div className={css.PostCONTAINER}>
                                <div className={css.shine}>
                                <a className={css.imgPOST} onClick={()=> handleItemClick(key)} ><img src={item.img} alt="" /></a>
                                </div>
                                <h1 onClick={()=> handleItemClick(key)}><Link className={css.test} to=''>{item.title}</Link></h1>
                                <h3>{getDifferenceDate(noww, item.post)}</h3>
                            </div>
                        </div>
                    ))}
                    <Pagination limit={LIMIT} total={length.length} pagina={page} setPage={setPage}/>
                
                </div>
                <div className={css.mainRIGHT}>
                    <span>GAMES NEWS "SAAGAS"</span>
                    <div className={css.rightLOGO}>
                        <img src="https://game3rb.com/wp-content/uploads/2022/04/0-17-1024x576-1.jpg" alt="" />
                    </div>
                    <span>MOST VIEW POST</span>
                    <div>
                        
                        {gamesMOST.map((item, key) => (
                            <div key={key} className={css.MostPOST}>
                                <div onClick={()=> handleItemClickMOST(key)}><img src={item.img} alt="" /></div>
                                <h2 onClick={()=> handleItemClickMOST(key)}><Link to='' className={css.testt}>{item.title}</Link></h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    
    )
}

