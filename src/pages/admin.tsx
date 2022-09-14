import css from './template.module.css'
import { AdminHeader } from './../components/adminHEADER/index';
import { AdminNav } from './../components/adminNAV/index';
import { AdminMain } from './../components/adminMAIN/index';
import { useState } from 'react';




export const Admin = () => {
    const [currentPage, setCurrentPAGE] = useState(0)
    const[query, setQuery] = useState('')

    return (
        <div className={css.bodyADMIN}>
            <AdminHeader query={query} setQuery={setQuery}/>
            <section className={css.mainADMIN}>
                
                <AdminNav currentPage={currentPage} setCurrentPAGE={setCurrentPAGE}/>
                <AdminMain currentPage={currentPage} setCurrentPAGE={setCurrentPAGE} query={query} setQuery={setQuery}/>
            </section>
        </div>
    )
}