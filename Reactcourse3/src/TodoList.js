import React,{useState} from 'react'

function TodoList() {
    const [list,setList]=useState([])
    const [newTodo,setNewTodo]=useState("")

    const ekle=()=>{
        setList([...list,newTodo])
        setNewTodo("")
    }
   
  return (
    <div>
        {
             list.map((e,index)=>{
                return(<h3 key={index}>{e}</h3>)
            })
        }
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <button type="button" class="btn btn-secondary" onClick={ekle}>Ekle</button>
    </div>
  )
}

export default TodoList