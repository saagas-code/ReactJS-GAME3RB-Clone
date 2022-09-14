import css from './template.module.css'
import { useState } from 'react';
import { games } from '../../types';
import { faAngleLeft, faAngleRight, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';


type Props = {
    games: games | undefined
    most: games[]
    categoryArray: [string]
    screenshotsArray: [string]
}




export const GameItem = ({games, most, categoryArray, screenshotsArray}: Props) => {
    const[shotsP, setShotsP] = useState(false)
    const navigate = useNavigate();

    const handleScreenShot = () => {
        if(!shotsP) {
            setShotsP(true)
        } else {
            setShotsP(false)
        }
    }
    
    const handleItemClickMOST = ( key: number) => {
        let tmpArray = [...most]
        navigate(`/${tmpArray[key].link}`)
        
    }

    return (

        <div className={css.mainCONTAINER}>
            <div className={css.mainContainerSPACE}>
                <div className={css.mainLeftGAME}>
                    <div className={css.genres}>
                        {categoryArray.map((item, key) => (
                            <div key={key} className={css.genress}>
                                <span><a href="">{item}</a></span>
                            </div>
                        ))}
                    </div>
                    <div className={css.gameTITLE}><h1>{games?.title}</h1></div>
                    
                    <section className={css.gameCONTAINER}>
                        <div className={css.gameIMG}><img src={games?.img} alt="" /></div>
                        <div className={css.gameDETAILS}>
                            <h3>Game Details</h3>
                            <ul>
                                <li><strong>RELEASE NAME</strong>: {games?.title}</li>
                                <li><strong>RELEASE SIZE</strong>: {games?.details.size}</li>
                                <li><strong>DEVELOPER</strong>: {games?.details.developer}</li>
                                <li><strong>PUBLISHER</strong>: {games?.details.publisher}</li>
                                <li><strong>GENRE</strong>: 
                                {categoryArray.map((item, key) => (
                                    <span key={key}> {item} </span>
                                ))}

                                </li>
                            </ul>
                        </div>
                        <h3 className={css.screenH3}>Screenshots</h3>
                        <div className={css.slideSCREEN}>
                            <div  className={css.leftB} onClick={handleScreenShot}><FontAwesomeIcon icon={faAngleLeft} /></div>
                            <div style={{marginLeft: shotsP ? '-100%' : '-0%'}}  className={css.slide}>

                                <span>
                                {screenshotsArray.map((item, key) => (
                                    <img key={key} src={item} alt="" />
                                ))}
                                </span>

                            </div>
                            <div className={css.boxSCREEN}>
                                <div style={{backgroundColor: shotsP ? 'gray' : 'red'}}></div>
                                <div style={{backgroundColor: shotsP ? 'red' : 'gray'}}></div>
                            </div>
                            <div className={css.rightB} onClick={handleScreenShot}><FontAwesomeIcon icon={faAngleRight} /></div>
                        </div>
                        <div className={css.video}>
                            <h3>Trailer</h3>
                            <video width='100%' height='auto' preload='none' controls src='https://cdn.akamai.steamstatic.com/steam/apps/256900369/movie480_vp9.webm?t=1660316331' poster={games?.img}>
                                <source  />
                            </video>
                        </div>
                        <div className={css.install}>
                            <h3>How to Install The Game</h3>
                            <span>1) Download the game using a <a href="">Torrent</a> program or Direct program</span> <br />
                            <span>2) Extract the game to your preferred location with WinRar or 7-Zip</span> <br />
                            <span>3) Wait for the extraction to end</span> <br />
                            <span>4) No need to install the game, just start with the LAUNCHER of the game as administrator</span> <br />
                            <span>5) Play! {games?.downloads.direct}</span> 
                        </div>
                        <div className={css.download}>
                            <h3>Download The Game</h3>
                            <div className={css.downloadCONTAINER}>
                                <h5>Check ''<a href="">How To Download</a>'' First</h5>
                                <div className={css.downloadLIST}>
                                    <span className={css.linkNAME}>Torrent Link</span>
                                    <div className={css.downloadBUTTON}>
                                        <a href="">
                                            <span><FontAwesomeIcon icon={faCloudArrowDown} /></span>
                                            <span>Download</span>
                                        </a>
                                    </div>
                                    <span className={css.linkNAME}>Direct Link</span>
                                    <div className={css.downloadBUTTON}>
                                        <a href="">
                                            <span><FontAwesomeIcon icon={faCloudArrowDown} /></span>
                                            <span>Download</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>






                <div className={css.mainRIGHT}>
                    <span>GAMES NEWS "SAAGAS"</span>
                    <div className={css.rightLOGO}>
                        <img src="https://game3rb.com/wp-content/uploads/2022/04/0-17-1024x576-1.jpg" alt="" />
                    </div>
                    <span>MOST VIEW POST</span>
                    <div>
                        
                        {most.map((item, key) => (
                            <div key={key} className={css.MostPOST}>
                                <div onClick={()=> handleItemClickMOST(key)}><img src={item.img} alt="" /></div>
                                <h2><a className={css.testt} href="">{item.title}</a></h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


