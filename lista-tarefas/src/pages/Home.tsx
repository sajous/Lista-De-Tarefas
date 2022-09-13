import { Button, Checkbox } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import { useState, useEffect} from "react"
import { FaTrash , FaEdit} from 'react-icons/fa'
import './home.css'

interface IListItem{
  id: number;
  title: string;
  state : boolean;
}


export const Home = (props :any) => {


    const [item, setItem] = useState<IListItem[]>([]);
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
        console.log (check)
  
      }
      

    return(
        <div className="container">
            <h1>Minhas Tarefas</h1>
      <input type="text" placeholder="Item" value={item} name="item" onChange = {e => setItem(e.target.value)} onKeyDown={handleKeyPress} />
        <Button variant="text" className="Button" onClick={addItem}>➕</Button>
      <ul>
        {itemList.map((item:any, index:any) => (
          <li  id={index}><input type="checkbox" onClick={teste} /><div className={`sublinhado ${check ? 'sublinhado-activate' : 'sublinhado-desactivate'}`}>{item}</div><a href=""><FaTrash /></a> <a href=""><FaEdit /></a></li>
        ))}
      </ul>
         </div>
    )
        
}

