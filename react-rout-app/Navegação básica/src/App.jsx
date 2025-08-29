import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Contato from "./contato"
import Home from "./home"
import Sobre from "./sobre"
import PostDetalhe from "./PostDetalhe"
import Posts from "./Posts"




function App() {
  

  return (
   <BrowserRouter>

    <nav>
      <Link to="/">Home</Link> \
      <Link to="/contato">Contato</Link> \
      <Link to="/sobre">Sobre</Link> \
      <Link to ="/post">Post</Link>\
    </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/post" element={<Posts/>}/>
         <Route path="/post/:id" element={<PostDetalhe/>}/>
      </Routes>
 
   </BrowserRouter>
  )
}

export default App
