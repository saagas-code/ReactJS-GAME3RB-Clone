import css from './template.module.css'
import { games } from '../../types';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setLink } from '../../redux/reducers/gameReducer';
import { api } from './../../api';
import { Pagination } from './../pagination/index';

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


export const MainCategory= ({setOffset, offset, page, setPage, games, length, gamesMOST}: Props) => {
    const dispatch = useDispatch()
    const changeGame = (newGame: string) => dispatch(setLink(newGame))
    const navigate = useNavigate();

    const handleItemClick = async ( key: number) => {
        
        let tmpArray = [...games]

        changeGame(tmpArray[key].link)
        localStorage.clear()
        localStorage.setItem('game', tmpArray[key].link)
        navigate(`/${tmpArray[key].link}`)

        let clickCOUNT = tmpArray[key].counts += 1
        await api.countCLICK(tmpArray[key].title, clickCOUNT)
        console.log(tmpArray[key].counts)
        

    }

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
                                <h1 onClick={()=> handleItemClick(key)}><a className={css.test} href={item.link}>{item.title}</a></h1>
                                <h3>{item.post}</h3>
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
                                <a href=""><img src={item.img} alt="" /></a>
                                <h2><a className={css.testt} href="">{item.title}</a></h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    
    )
}

