import css from './template.module.css'
import { AuthContext } from '../../../contexts/Auth/AuthContext'
import { useContext, useState, useEffect } from 'react';
import { category } from '../../../types';
import { api } from './../../../api';

type Props = {
    AllCategory: category[],
    setAllCATEGORY: React.Dispatch<React.SetStateAction<category[]>>
}

export const NewPosts = ({AllCategory, setAllCATEGORY}: Props) => {
    
    const[title, setTitle] = useState('')
    const[img, setImg] = useState('')
    const[size, setSize] = useState('')
    const[developer, setDeveloper] = useState('')
    const[publisher, setPublisher] = useState('')
    const[release, setRelease] = useState('')
    const[screen1, setScreen1] = useState('')
    const[screen2, setScreen2] = useState('')
    const[trailer, setTrailer] = useState('')
    const[about, setAbout] = useState('')
    const[torrent, setTorrentLINK] = useState('')
    const[direct, setDirectLINK] = useState('')
    const[post, setPost] = useState('1')
    const[link, setLink] = useState('')
    const[genre, setGenre] = useState('')
    const[count, setCount] = useState(0)

    useEffect(() => {
      
    }, [])
    

    const handleAddGame = async () => {
        let json = await api.AddNewGame(title, img, size, developer, publisher, release, screen1, screen2, trailer, about,
            torrent, direct, post,
            link, genre, count)
        
        if(json.status) {
            alert('Post adicionado com sucesso.')
        }
        if(!json.status) {
            alert('Post já adicionado')
        }
    }

    const handleClear = () => {
        setTitle('')
        setImg('')
        setScreen1('')
        setScreen2('')
        setTrailer('')
        setTorrentLINK('')
        setDirectLINK('')
        setLink('')
        setSize('')
        setDeveloper('')
        setPublisher('')
        setRelease('')
        setAbout('')
    }

    return (

        <div className={css.adminNewContainer}>
                <div className={css.newFORM}>
                    <form action="">
                        
                        
                        <h1>Add new Game</h1>
                        <input value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' type="text" />
                        <input value={img} onChange={e => setImg(e.target.value)} placeholder='Image link' type="text" />
                        <input value={screen1} onChange={e => setScreen1(e.target.value)} placeholder='Screenshot 1' type="text" />
                        <input value={screen2} onChange={e => setScreen2(e.target.value)} placeholder='Screenshot 2' type="text" />
                        <input value={trailer} onChange={e => setTrailer(e.target.value)} placeholder='Trailer link' type="text" />
                        <input value={torrent} onChange={e => setTorrentLINK(e.target.value)} placeholder='Torrent link' type="text" />
                        <input value={direct} onChange={e =>  setDirectLINK(e.target.value)} placeholder='Direct link' type="text" />
                        <input value={link} onChange={e => setLink(e.target.value)} placeholder='Url link' type="text" />
                        
                        <label htmlFor="">DETAILS</label>
                        <input value={size} onChange={e => setSize(e.target.value)} placeholder='Size' type="text" />
                        <input value={developer} onChange={e => setDeveloper(e.target.value)} placeholder='Developer' type="text" />
                        <input value={publisher} onChange={e => setPublisher(e.target.value)} placeholder='Publisher' type="text" />
                        <input value={release} onChange={e => setRelease(e.target.value)} placeholder='Release' type="text" />
                        <input value={about} onChange={e => setAbout(e.target.value)} placeholder='About' type="text" />

                        <label htmlFor="">Genre</label>
                        <select onChange={e => setGenre(e.target.value)} name="" id="">
                            <option value="">Choose a genre</option>
                            {AllCategory.map((item, key) => (
                                <option value={item.category}>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</option>
                            ))}
                            
                        </select>
                    </form>
                    <div className={css.buttonsFINISH}>
                        <button onClick={handleAddGame} className={css.addBUTTON} style={{backgroundColor:'#41bc96'}}>Add Game</button>
                        <button onClick={handleClear} className={css.clearBUTTON}>Clear</button>
                    </div>
                </div>
                <div className={css.newPREVIEW}>
                    <h1>mini Preview</h1>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <h2>{title}</h2>
                    </div>
                </div>
        </div>
        
    )
}
