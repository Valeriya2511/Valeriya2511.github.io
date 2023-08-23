import { createContext } from 'react';

export type GlobalAuthContext = {
isAuth: boolean;
setIsAuth: (isAuth:boolean)=>void;
}

export const AuthContext = createContext<GlobalAuthContext>({  isAuth: false,
  setIsAuth: ()=>{}}
);
