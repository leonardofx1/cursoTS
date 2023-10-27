import React, { createContext } from 'react'

export interface Person  {
    name:string
    age:number
}
export const valuePerson:Person ={age:22,name:'leonardo'}
export const InfoContex = createContext<Person | null>(null)

export const InfoContexProvider = ({children}:{children:React.ReactNode}) => {

  return (
   <InfoContex.Provider value={valuePerson}>
    {children}
   </InfoContex.Provider>
  )
}


