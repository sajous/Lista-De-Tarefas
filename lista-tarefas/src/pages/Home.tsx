import React, { ReactEventHandler, useCallback, useState } from "react"


export const Home = () => {

    
    const [item, setItem]:any = useState('');
    const [itemList, setItemList]:any = useState([])

    const addItem = () => {
        if( item.length === 0) return;
        setItemList([item].concat(itemList))
        setItem('')
    }

    const handleKeyPress = (e:any) => {
        if(e.key === 'Enter'){
            if(e.currentTarget.value.trim().length === 0) return;
            setItemList([item].concat(itemList))
            setItem('')
        }
      }


    return (
        <div>
            <h1>Lista de Compras</h1>
      <input type="text" placeholder="Item" value={item} name="item" onChange = {e => setItem(e.target.value)} onKeyDown={handleKeyPress} />
    <button onClick={addItem}>Adicionar Item</button>
      <ul>
        {itemList.map((item:any) => (
          <li><input type= "checkbox" />{item}</li>
        ))}
      </ul>
         </div>
    )
        
}