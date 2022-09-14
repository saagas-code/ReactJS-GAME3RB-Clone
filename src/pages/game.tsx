import css from './template.module.css'
import { Menu } from '../components/menu/index';
import { GameItem } from '../components/game/index';
import { LogoGame } from './../components/logoGame/index';
import { useEffect, useState } from 'react';
import { games } from '../types';
import { api } from './../api';
import { useParams } from 'react-router-dom';


export const GameS = () => {
    const[games, setGames] = useState<games>()
    const[most, setMost] = useState<games[]>([])
    const[categoryArray, setCategoryArray] = useState<[string]>([''])
    const[screenshotsArray, setScreenARRAY] = useState<[string]>([''])

    const { game } = useParams();

    useEffect(() => {
        localStorage.removeItem('token')
        let request1 = async () => {
            
            let json = await api.GetGame(game as string)
            setGames(json.games)
            setCategoryArray(json.games.genre)
            setScreenARRAY(json.games.screenshot)
            
        }
        let request2 = async () => {
            let json = await api.GetAllMost()
            setMost(json.games)
        }

        request1()
        request2() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [games])

    return (
        <div className={css.Body}>
            <LogoGame/>
            <Menu/>
            <GameItem categoryArray={categoryArray} screenshotsArray={screenshotsArray} games={games} most={most}/>
        </div>
    )
}