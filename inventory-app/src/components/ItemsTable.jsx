import { useContext } from "react"
import { StockContexts } from "../contexts/StockContexts"
import { Link } from "react-router-dom"

import DeleteButton from "./DeleteButton"

export default function  ItemsTable(){


  const { items } = useContext(StockContexts)

      return(

        
          <table>
            <thead>
            <tr>
                <th>ID</th>
                 <th>name</th>
                  <th>Estoque</th>
                   <th>categoria</th>
                    <th>Ações</th>
            </tr>

            </thead>

            <tbody>
                {items.map((item)=> (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantify}</td>
                  <td>{item.category}</td>
                  <td>
              <Link to={`/items/${item.id}`} className="button is-primary is-small">
                Ver
              </Link>
              <Link to={`/items/${item.id}/update`} className="button is-small">
                Atualizar
              </Link>
              <DeleteButton itemId={item.id} />
                 
            </td>
                </tr>
                ))}
            </tbody>

          </table>

      




      )
    
}