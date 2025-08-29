import {  NavLink, Outlet, useLocation } from "react-router-dom";


export default function ItemsLayout(){
   const {pathname} = useLocation()
    return(
       <main>
        <h1>DashBoard</h1>
        <div className="tabs">
         <NavLink to= "listItems" className= {'tab'}>Lista de Items</NavLink>
         <NavLink to= "createItems" className={"tab"}> Novo Item</NavLink>
        
       </div>
       
         <Outlet/>
     
       </main>
    )
}