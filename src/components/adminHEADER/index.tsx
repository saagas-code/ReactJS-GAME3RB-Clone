import css from './template.module.css'
import { faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

export const AdminHeader = ({setQuery, query}: Props) => {

    const [searchField, setSearchFIELD] = useState('')
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await auth.signout()
        navigate('/login')

    }

    const handleSearch = () => {
        setQuery(searchField)
    }

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            setQuery(searchField)
        }
    };
   
    return (

        
        <header className={css.adminHEADER}>
            <div className={css.leftHEADER}>GAME3RB Dashboard userLogged: {auth.user?.username}</div>
            <div className={css.rightHEADER}>
                <div className={css.adminSEARCH}>
                    <input onKeyDown={keyDownHandler} onChange={e => setSearchFIELD(e.target.value)}  placeholder='Search for...' type="text" />
                    <div onClick={handleSearch} ><FontAwesomeIcon icon={faMagnifyingGlass} /></div>

                    <span onClick={handleLogout} ><FontAwesomeIcon icon={faRightFromBracket} /></span>
                </div>
            </div>
        </header>
        
        
    )
}

