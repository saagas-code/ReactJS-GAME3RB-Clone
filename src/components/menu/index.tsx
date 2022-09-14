

import css from './template.module.css'
import * as C from './menu.styles'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { genreArray } from '../../helpers/dateFilters'



export const Menu = () => {
    const [mbMENU, setMbMENU] = useState(false)
    const [visibility, setVisibility] = useState(false)
    const [opacity, setOpacity] = useState(true)
    const [position, setPosition] = useState(true)
    const [index, setIndex] = useState('0')
    let navigate = useNavigate();

    const handleMbMENU = () => {
        mbMENU ? setMbMENU(false) : setMbMENU(true)
    }
    
    const handleSubMENU = () => {
        if(index === '0') {
            setIndex('1')
        } else {
            setIndex('0')
        }
        if(opacity) {
            setOpacity(false) 
        } else {
            setOpacity(true)
        }
        if(position) {
            setPosition(false)
        } else {
            setPosition(true)
        }
        if(visibility) {
            setVisibility(false)
        } else {
            setVisibility(true)
        }
         
        
    }
    
    const handleCategory = (key: number) => {
        let tmpArray = [...genreArray]

        navigate(`/category/${tmpArray[key]}`)
        localStorage.clear()
        localStorage.setItem('genre', tmpArray[key])
        handleSubMENU()
    }
    

    return (
        <div>
            <div className={css.headerMENU}>
                <div  className={css.headerMenuCONTAINER}>
                    
                    <ul className={css.menuLIST}>
                        <li className={css.menuITEM}><a href="/">Home</a></li>
                        <li onClick={handleSubMENU} className={css.menuITEM}>Pc Games <FontAwesomeIcon icon={faAngleDown} /></li>
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

            
            <C.Drop   opacity={opacity} style={{zIndex: index}} className={css.dropdown}>
                <C.list visibility={visibility}  className={css.dropdownUL} position={position}>
                    {genreArray.map((item, key) => (
                        <>
                        
                            <li onClick={(e) => {handleCategory(key)}} key={key} className={css.subITEM}><Link to={''}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link></li> 
                        </>
                    ))}
                </C.list>
            </C.Drop>
            
            
            
        </div>
    )
}