import React,{useState} from 'react'

function TodoList() {
    const [list,setList]=useState(["İsmail","Arif","Güleç"])
    const [newTodo,setNewTodo]=useState("")

    const ekle=()=>{
        setList([...list,newTodo])
        setNewTodo("")
    }
   
  return (
    <div>
        {
             list.map((e,index)=>{
                return(<ul key={index} className='list-group '><li className='list-group-item '> {e}
                </li><button className="btn btn-success" onClick={()=>setList(list.filter(i=>i !== e))}>Delete</button></ul>
                    )
            })
        }
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <button type="button" class="btn btn-secondary" onClick={ekle}>Ekle</button>
    </div>
  )
}

export default TodoList