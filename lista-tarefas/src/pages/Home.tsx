import { Button, Checkbox, TextField } from "@mui/material";
import React, { ReactEventHandler, useCallback, useState } from "react"
import { FaTrash , FaEdit} from 'react-icons/fa'
import './home.css'

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
        <div className="container">
            <h1>Minhas Tarefas</h1>
      <input type="text" placeholder="Item" value={item} name="item" onChange = {e => setItem(e.target.value)} onKeyDown={handleKeyPress} />
        <Button variant="text" className="Button" onClick={addItem}>➕</Button>
      <ul>
        {itemList.map((item:any) => (
          <li><Checkbox inputProps={{ 'aria-label': 'controlled' }} />{item}<a href=""><FaTrash /></a> <a href=""><FaEdit /></a></li>
        ))}
      </ul>
         </div>
    )
        
}