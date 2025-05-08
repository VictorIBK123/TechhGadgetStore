import React, { createContext, Dispatch, SetStateAction, useRef } from 'react';
type categoriesType={name: string, key: string, img_url: string}[]
type setCategoriesType = Dispatch<SetStateAction<{name: string, key: string, img_url: string}[]>>

export const UserDetails = createContext<{userEmail:string, setUserEmail: Dispatch<SetStateAction<string>>}|undefined>(undefined);
export const CategoriesContext = createContext<{categoriesGlobal: categoriesType, setCategoriesGlobal: setCategoriesType}|undefined>(undefined)