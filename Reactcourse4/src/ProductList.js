import React,{useState} from 'react'

function ProductList() {
    const [detail,setDetail]=useState("")
    const products=[
        {
            id:1,
            urunAd:"Elma",
            urunFiyat:100,
            description:"Açıklama"
        },
        {
            id:2,
            urunAd:"Armut",
            urunFiyat:200,
            description:"Açıklama"
        },
        {
            id:3,
            urunAd:"Kiraz",
            urunFiyat:300,
            description:"Açıklama"
        }
    ]
  return (
    <div>
        {products.map((e)=>{
            return (<div>
                <span>Adı: {e.urunAd} </span>
                <span>Fiyatı: {e.urunFiyat}  </span>
                <button onClick={()=> setDetail(e)}>Detaylar</button>
            </div>)
        })}
        {detail && (
            <div>
                <h1>Seçilen Urun Detay</h1>
                <p>{detail.urunAd}</p>
                <p>{detail.urunFiyat}</p>
                <p>{detail.description}</p>
                <button onClick={()=> setDetail("")}>Kapat</button>
            </div>
        )}
    </div>

  )
}

export default ProductList