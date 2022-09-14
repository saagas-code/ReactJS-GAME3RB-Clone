import css from './template.module.css'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faEnvelope, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
let game3rbLOGO = 'https://game3rb.com/wp-content/uploads/2018/06/New-logo-English.png'

type Props = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Logo = ({setQuery, setPage, query}: Props) => {
    const [searchOn, setSearchON] = useState(false)
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    
    
    const handleSearch = () => {
        if(!searchOn) {
            setSearchON(true)
        } else {
            setSearchON(false)
        }
    }
   

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            let searchLower = search.toLocaleLowerCase()
            setQuery(searchLower)
            localStorage.setItem('search', searchLower)
            setPage(0)
            navigate(`/?q=${search}`)

            if(!searchOn) {
                setSearchON(true)
            } else {
                setSearchON(false)
            }
        }
    };

    return (
        <div>
            <div className={css.blackBAR}>
                
            </div>
    
            <div className={css.headerLogo}>
                <div className={css.headerLogoCONTAINER}>
                    <div style={{ opacity: searchOn ? '0.1' : '1' }} className={css.leftLogo}>
                        <img src={game3rbLOGO} alt="" />
                    </div>
                    <div className={css.rightLogo}>
                        <div className={css.searchBAR}>
                            <div style={{ visibility: searchOn ? 'hidden' : undefined }} className={css.contact}>
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <span>Contact Us</span>
                            </div>
                            <div onClick={handleSearch} className={css.search}>
                                {searchOn &&
                                    <span><FontAwesomeIcon icon={faX} /></span>
                                }
                                {!searchOn &&
                                    <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ opacity: searchOn ? '1' : '0', visibility: searchOn ? 'visible' : 'hidden' }} className={css.searchGAME}>
                        <input onKeyDown={keyDownHandler} placeholder='Search ...' onChange={e => setSearch(e.target.value)}  type="text" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}