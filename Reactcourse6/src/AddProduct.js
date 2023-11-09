import React,{useState} from 'react'

function AddProduct() {
    const [urunList,setUrunList]=useState([
        {
          id:1,
          urunKategori:"Araç",
          urunAdi:"Uçak",
          urunFiyati:100,
          urunAciklama:"İsmail Arif Güleç"
        },
        {
          id:2,
          urunKategori:"Araç",
          urunAdi:"Uçak",
          urunFiyati:100,
          urunAciklama:"İsmail Arif Güleç"
        },
        {
          id:3,
          urunKategori:"Araç",
          urunAdi:"Uçak",
          urunFiyati:100,
          urunAciklama:"İsmail Arif Güleç"
        },
        {
          id:3,
          urunKategori:"Araç",
          urunAdi:"Uçak",
          urunFiyati:100,
          urunAciklama:"İsmail Arif Güleç"
        },
        {
          id:3,
          urunKategori:"Araç",
          urunAdi:"Uçak",
          urunFiyati:100,
          urunAciklama:"İsmail Arif Güleç"
        },
        {
          id:3,
          urunKategori:"Araç",
          urunAdi:"Uçak",
          urunFiyati:100,
          urunAciklama:"İsmail Arif Güleç"
        },
        {
          id:3,
          urunKategori:"Araç",
          urunAdi:"Uçak",
          urunFiyati:100,
          urunAciklama:"İsmail Arif Güleç"
        },
        {
          id:3,
          urunKategori:"Araç",
          urunAdi:"Uçak",
          urunFiyati:100,
          urunAciklama:"İsmail Arif Güleç"
        },
        {
          id:3,
          urunKategori:"Araç",
          urunAdi:"Uçak",
          urunFiyati:100,
          urunAciklama:"İsmail Arif Güleç"
        },
        
      ])
      const [idCount,setIdCount] = useState(0)
      const [newUrunKategori,setNewUrunKategori]=useState("")
      const [newUrunAdi,setNewUrunAdi]=useState("")
      const [newUrunFiyati,setNewUrunFiyati]=useState("")
      const [newUrunAciklama,setNewUrunAciklama]=useState("")
      const [guncelleId,setGuncelleId]=useState()
      const [buttonAdi,setButtonAdi]=useState(true)

      const urunEkle=()=>{
        if (newUrunKategori&& newUrunAdi&&newUrunFiyati&&newUrunAciklama) {
            setIdCount(idCount+1)
            setUrunList([...urunList,{id:idCount,urunKategori:newUrunKategori,urunAdi:newUrunAdi,urunFiyati:newUrunFiyati,urunAciklama:newUrunAciklama}])
            setNewUrunAciklama("")
            setNewUrunAdi("")
            setNewUrunFiyati("")
            setNewUrunKategori("")
        }
       
      }
      const urunDuzenle=(event) =>{
        setNewUrunKategori(event.urunKategori)
        setNewUrunAdi(event.urunAdi)
        setNewUrunFiyati(event.urunFiyati)
        setNewUrunAciklama(event.urunAciklama)
        setGuncelleId(event.id)
        setButtonAdi(false)
      }
      const urunGuncelle = () => {
        
            const yeniListe = urunList.map((e)=>{
                return(
                    e.id === guncelleId ? {id:idCount,urunKategori:newUrunKategori,urunAdi:newUrunAdi,urunFiyati:newUrunFiyati,urunAciklama:newUrunAciklama}:e
                )
            })
            setUrunList(yeniListe);
            setNewUrunKategori("");
            setNewUrunAdi("");
            setNewUrunFiyati();
            setNewUrunAciklama("");
            setGuncelleId()
           setButtonAdi(true)
       
      };

      const urunSil = (e)=>{
        setUrunList( urunList.filter((i)=>e.id !==i.id))
      }
      
  return (
    <div>
        <div className='container'>
            <h2>Ürün Ekle</h2>
            <div className="row border border-2 border-info">
                <div className='col-6 text-center mt-2'>
                <input className='form-control mb-2' type="text" value={newUrunKategori} onChange={(e)=>setNewUrunKategori(e.target.value)} placeholder='Ürün Kategori'/>
            <input className='form-control' type="text" value={newUrunAdi} onChange={(e)=>setNewUrunAdi(e.target.value)} placeholder='Ürün Adı'/>
                </div>
            <div className="col-6 mt-2">
                <input  className='form-control mb-2'type="text" value={newUrunFiyati} onChange={(e)=>setNewUrunFiyati(e.target.value)} placeholder='Ürün Fiyatı'/>
                <input className='form-control' type="text" value={newUrunAciklama} onChange={(e)=>setNewUrunAciklama(e.target.value)} placeholder='Ürün Açıklaması'/>
            </div>
            
            <div >
            {buttonAdi=== true?
                (<button className='btn btn-success mt-2 mb-2' onClick={urunEkle}>Ekle</button>):
                (<button className='btn btn-warning mt-2 mb-2' onClick={urunGuncelle}>Güncelle</button>)
                }
                </div>
                </div>
                <div className="row text-center mt-5 d-flex justify-content-center">
                    <h2>Ürün Listesi</h2>
                

            {
                urunList.map((e,index)=>{
                    return(
                    <div class="card col-3 border border-2 border-info ms-4 mb-2" >
  <div key={index} className="card-body">
    <h5 className="card-title">{e.urunKategori}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{e.urunAdi}</h6>
    <p className="card-text">{e.urunAciklama}</p>
    <button onClick={()=> urunSil(e)} className="btn btn-danger me-2">Sil</button>
    <button onClick={()=> urunDuzenle(e)} className="btn btn-primary">Güncelle</button>
  </div>
</div>)
                })
            }    
            </div>

        </div>
    </div>
  )
}

export default AddProduct