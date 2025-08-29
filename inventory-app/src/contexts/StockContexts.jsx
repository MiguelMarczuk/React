import { createContext, useState } from "react";


export const StockContexts = createContext({})

export function StockContextProvider({ children }) {
  const [items , setItems] = useState(()=> {
       
    const StoredItems = localStorage.getItem("meus-items")

    if (!StoredItems) return []

     const items = JSON.parse(StoredItems)

     items.forEach(item => {
        item.createdAT = new Date(item.createdAT)
        item.updatedAT = new Date(item.updatedAT)
     });

     return items
    

  })

  const addItem = (item) => {
    setItems(currentState => {
        const updateItems = [item, ...currentState]
        localStorage.setItem("meus-items" , JSON.stringify(updateItems))
        return updateItems
    })
  }

  const getItem =(itemId) => {
    return items.find(item => item.id === + itemId)
  }


  const updateItem = (itemId , newAtributes) => {
      setItems(currentState => {
        const itemIndex = currentState.findIndex(item => item.id === +itemId)
        const updateItems = [...currentState]
        Object.assign(updateItems[itemIndex], newAtributes , {updatedAT: (new Date())})
        localStorage.setItem("meus-items" , JSON.stringify(updateItems))
        return updateItems
      })
  }

  const deleteItem =(itemid) => {
    setItems(currentState =>{
      const updateItems = currentState.filter(item => item.id !== itemid);
      localStorage.setItem("meus-items", JSON.stringify(updateItems))
      return updateItems
    })
  }

  const stock = {
    items, 
    addItem,
    deleteItem,
    getItem,
    updateItem
  }

    return(
        
       <StockContexts.Provider value={stock}>
         {children}
       </StockContexts.Provider>
    )
}