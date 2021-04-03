import React, { createContext,useState } from 'react';
//import firebase from '../config/firebase'
import {initialUsers} from '../data/data'


const userReducer=(state,action)=>{
    switch (action.type) {
        case 'ADD_USER':
            return{
                users:[...state.users, action.payload]
            }
        case 'Delete_USER':
            const deleteList= state.users.filter(user=>user.id!==action.payload)
            console.log(action.payload)
           return {
            users:[...deleteList]
        } 
        case 'LIST_USER':
            
            const newList= initialUsers.users.filter(user=>{
               if (action.payload.toLowerCase()==="") {
                   return user
               } else {
                return user.nombre.toLowerCase().includes(action.payload.toLowerCase())
               }
            })


            return{
                users:[...newList]
            } 
        case 'EDIT_USER':
            let editedList=state.users.map((user,i)=>{
                let {id, nombre, edad, correo}=action.payload
                if(user.id===action.payload.id){
                  user={
                      id,
                      nombre,
                      edad, 
                      correo
                  }
                }
                return user;
            })
           

            return{
                users:[...editedList]
            } 
            
            default:
                return state;
                
            }
        }
        
export const FunctionalsContent =createContext();
const FunctionalsProvider=({children})=>{
    const [titleName,setTitleName]=useState('Home')
    const [usersState,usersDispatch]=React.useReducer(userReducer,initialUsers);
    
    
        return(
        <FunctionalsContent.Provider
            value={{
                usersState,usersDispatch,
                titleName,setTitleName
            }}
        >
            {children}
        </FunctionalsContent.Provider>)
}
export default FunctionalsProvider;