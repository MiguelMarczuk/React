import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"

export default function DeleteButton({itemId}){

    const {deleteItem} = useStock()
    const navigate = useNavigate()

     const enviar = () =>{
       deleteItem(itemId)
       navigate("/items/ListItems")
     }

    return(
    <button className="button is-danger is-small"
    onClick={enviar}
    >
        delete
    </button>
    )
}