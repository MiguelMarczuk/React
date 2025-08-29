import { Link, Outlet } from "react-router-dom";


export default function RootLayout(){

    return(
        <>
        <header>
            <Link to = "/" className="logo" >React Stock</Link>
            <nav className="navLayout">
                <Link to= "/">Inicio</Link>
                <Link to= "/items">Items</Link>
            </nav>
           
        </header>
         <main>
          
            <Outlet/>
         </main>
        </>
    )
}