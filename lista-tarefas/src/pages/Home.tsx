import { Button, Checkbox } from "@mui/material";
import React from "react";
import { useState, useEffect} from "react"
import { FaTrash , FaEdit} from 'react-icons/fa'
import './home.css'



export const Home = (props :any) => {


    const [item, setItem]:any = useState('');
    const [itemList, setItemList]:any = useState([])
    const [check , setCheck] :any = useState()

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

      const teste =(e:any) =>{
        
        setCheck(!check)
      }

    
    return(
        <div className="container">
            <h1>Minhas Tarefas</h1>
      <input type="text" placeholder="Item" value={item} name="item" onChange = {e => setItem(e.target.value)} onKeyDown={handleKeyPress} />
        <Button variant="text" className="Button" onClick={addItem}>➕</Button>
      <ul>
        {itemList.map((item:any, index:any) => (
          <li><Checkbox checked={check} onChange={teste} inputProps={{ 'aria-label': 'controlled' }} /><div id={index} className={`sublinhado ${check ? 'sublinhado-activate' : 'sublinhado-desactivate'}`}>{item}</div><a href=""><FaTrash /></a> <a href=""><FaEdit /></a></li>
        ))}
      </ul>
         </div>
    )
        
}

