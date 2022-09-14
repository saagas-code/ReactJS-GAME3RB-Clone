import {createContext} from 'react';
import { accounts } from '../../types';

export type AuthContextType = {
    user: accounts | null;
    signin: (username: string, password: string) => Promise<boolean>;
    signout: () => void;
    request: (username: string) => Promise<boolean>;
}


export const AuthContext = createContext<AuthContextType>(null!);