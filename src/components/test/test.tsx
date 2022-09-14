import css from './template.module.css'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faCircle, faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
let game3rbLOGO = 'https://game3rb.com/wp-content/uploads/2018/06/New-logo-English.png'


export const Home = () => {
const [mbMENU, setMbMENU] = useState(false)



useEffect(() => {
    
}, []);

const handleMbMENU = () => {
    mbMENU ? setMbMENU(false) : setMbMENU(true)
}


    return (
        <div className={css.Body}>
            <div className={css.blackBAR}>
                
            </div>

            <div className={css.headerLogo}>
                <div className={css.headerLogoCONTAINER}>
                    <div className={css.leftLogo}>
                        <img src={game3rbLOGO} alt="" />
                    </div>
                    <div className={css.rightLogo}>
                        <div className={css.searchBAR}>
                            <div className={css.contact}>
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <span>Contact Us</span>
                            </div>
                            <div className={css.search}><span><FontAwesomeIcon icon={faMagnifyingGlass} /></span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.headerMENU}>
                <div className={css.headerMenuCONTAINER}>
                    <ul className={css.menuLIST}>
                        <li className={css.menuITEM}>Home</li>
                        <li className={css.menuITEM}>Pc Games</li>
                        <li className={css.menuITEM}>Pc repack</li>
                        <li className={css.menuITEM}>games online</li>
                        <li className={css.menuITEM}>games updates</li>
                        <li className={css.menuITEM}>consoles</li>
                        <li className={css.menuITEM}>about us</li>
                        <li className={css.menuITEM}>dmca</li>
                        <li className={css.menuITEM}>how to download</li>
                    </ul>
                </div>
            </div>

            <div className={css.mbMENU}>
                <div className={css.mbMenuCONTAINER}>
                    <span onClick={handleMbMENU} className={css.dropdown}>Go To</span> <FontAwesomeIcon icon={faAngleDown} />
                    {mbMENU &&
                        <ul className={css.dropdownMENU}>
                            <li><a href="">Adventure</a></li>   
                            <li><a href="">Casual</a></li>      
                            <li><a href="">Early acess</a></li> 
                            <li><a href="">Gore</a></li>
                            <li><a href="">Horror</a>  </li>    
                            <li><a href="">Indie</a> </li>      
                            <li><a href="">Racing</a></li>      
                            <li><a href="">RPG</a></li>         
                            <li><a href="">Simulation</a></li>  
                            <li><a href="">Sports</a></li>
                            <li><a href="">Strategy</a></li>
                        </ul>
                    }
                </div>
            </div>

            
        
            <div className={css.mainCONTAINER}>
                <div className={css.mainContainerSPACE}>
                    <div className={css.mainLEFT}>
                        <div className={css.POST}>
                            <div className={css.PostCONTAINER}>
                                <div >
                                    <div className={css.shine}>
                                    <a href=""><img src="https://i0.wp.com/game3rb.com/wp-content/uploads/2022/08/0-46.jpg?ssl=1" alt="" /></a>
                                    </div>
                                </div>
                                <h1><a href="">NO MANS SKY ONLINE ONDELINE PIRATEADO</a></h1>
                                <h3>about 6 hours ago</h3>
                            </div>
                        </div>
                        <div className={css.POST}>
                            <div className={css.PostCONTAINER}>
                                <div className={css.shine}>
                                <a href=""><img src="https://i0.wp.com/game3rb.com/wp-content/uploads/2022/08/0-46.jpg?ssl=1" alt="" /></a>
                                </div>
                                <h1><a href=""> DownloadNO MANS SKY ONLINE ONDELINE PIRATEADO</a></h1>
                                <h3>about 6 hours ago</h3>
                            </div>
                        </div>
                        <div className={css.POST}>
                            <div className={css.PostCONTAINER}>
                                <div>
                                <a href=""><img src="https://i0.wp.com/game3rb.com/wp-content/uploads/2022/08/0-46.jpg?ssl=1" alt="" /></a>
                                </div>
                                <h1><a href=""> ownloadNO MANS SKY ONLINE ONDELINE PIRATEADO</a></h1>
                                <h3>about 6 hours ago</h3>
                            </div>
                        </div>
                        <div className={css.POST}>
                            <div className={css.PostCONTAINER}>
                                <div>
                                    <a href=""><img src="https://i0.wp.com/game3rb.com/wp-content/uploads/2022/08/0-46.jpg?ssl=1" alt="" /></a>
                                </div>
                                <h1><a href="">Download ONLINE ONDELINE PIRATEADO</a></h1>
                                <h3>about 6 hours ago</h3>
                            </div>
                        </div>
                    </div>
                    <div className={css.mainRIGHT}>
                        <span>GAMES NEWS "SAAGAS"</span>
                        <div className={css.rightLOGO}>
                            <img src="https://game3rb.com/wp-content/uploads/2022/04/0-17-1024x576-1.jpg" alt="" />
                        </div>
                        <span>MOST VIEW POST</span>
                        <div>
                            <div className={css.MostPOST}>
                                <a href=""><img src="https://i0.wp.com/game3rb.com/wp-content/uploads/2022/08/0-46.jpg?ssl=1" alt="" /></a>
                                <h2><a href="">Homem aranha</a></h2>
                            </div>

                            <div className={css.MostPOST}>
                                <a href=""><img src="https://i0.wp.com/game3rb.com/wp-content/uploads/2022/08/0-46.jpg?ssl=1" alt="" /></a>
                                <h2><a href="">Homem aranhad wadawdaw dad ad aw dwa d da dawd aw</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            
        </div>
    )
}

