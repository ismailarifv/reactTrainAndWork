import React,{useState} from 'react'

function NoteList() {
   const [list,setList]=useState([
    {id:1,
    title:"Matematik",
    description:"Açıklama"
    },
    {id:2,
    title:"Matematik",
    description:"Açıklama"
    }, 
   ])
   const [count,setCount]=useState(10)
   const [newTitle,setNewTitle]=useState("")
   const [newDescription,setNewDescription]=useState("")
   const [updateId, setUpdateId] = useState();


  const ekle=()=>{
    if (newTitle&&newDescription) {
        
        setCount(count+2)
        setList([...list,{id:count,title:newTitle,description:newDescription}])
            setNewTitle("")
            setNewDescription("")
        }
      
        
    
  }
  const guncelle = () => {
    const newNotes = list.map((i) => {
      return i.id === updateId ? { title: newTitle, description: newDescription, id: updateId } : i;
    });
    setList(newNotes);
    setNewTitle("");
    setNewDescription("");
    setUpdateId("");
    
  };
  const duzenle = (item)=>{
    setNewTitle(item.title)
    setNewDescription(item.description)
    setUpdateId(item.id)
  }
  
  return (
    <div className="text-center">
        <h6>Başlık </h6>
        <input className='form-control' type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder='Title'/><br/>
        <h6>Açıkla </h6>
        <input  className='form-control'type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder='Description'/><br/>
        <button className='btn btn-success' onClick={ekle}>Ekle</button>
        <button className='btn btn-primary' onClick={guncelle}>Düzenle</button>

       {
        list.map((e,index)=>{
            return(
                <div key={index} className='mt-5'>
                    <ul className='list-group '>
                        <li className='list-group-item '>{e.title}</li>
                        <li className='list-group-item '>{e.description}</li>
                        <li className='list-group-item '><button className="btn btn-danger"onClick={()=> setList(list.filter(i=>i.id !== e.id))}>Sil</button></li>
                        <li className='list-group-item '><button className='btn btn-primary' onClick={()=>duzenle(e)}>Düzenle</button></li>
                    </ul> 
                </div>
            ) 
        })
       }

    </div>
  )
}

export default NoteList