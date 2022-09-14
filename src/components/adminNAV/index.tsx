import css from './template.module.css'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useContext, useState } from 'react';

type Props = {
    currentPage: number,
    setCurrentPAGE: React.Dispatch<React.SetStateAction<number>>
}



export const AdminNav = ({currentPage, setCurrentPAGE}: Props) => {
    
    const auth = useContext(AuthContext)
    
    const handleChangePage = (key: number) => {

    }
   
    return (
        <div className={css.adminMainCONTAINER}>
            <nav className={css.adminNAV}>
                <div onClick={(e) => {setCurrentPAGE(0)}} style={currentPage === 0 ? {color:'white'} : {color:'#9ea3a5'}} >
                    <span>All Posts</span>
                    <span>{currentPage === 0 &&
                        <FontAwesomeIcon icon={faAngleRight} />
                    }</span>
                </div>
                <div onClick={(e) => {setCurrentPAGE(2)}} style={currentPage === 2 ? {color:'white'} : {color:'#9ea3a5'}} >
                    <span>Create New Post</span>
                    <span>{currentPage === 2 && 
                        <FontAwesomeIcon icon={faAngleRight} />
                    }</span>
                </div>
                <div onClick={(e) => {setCurrentPAGE(3)}} style={currentPage === 3 ? {color:'white'} : {color:'#9ea3a5'}} >
                    <span>Create New Category</span>
                    <span>{currentPage === 3 && 
                        <FontAwesomeIcon icon={faAngleRight} />
                    }</span>
                </div>
                    
            </nav>
        </div>  
    )
}

