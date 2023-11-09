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
    <div className='row'>
        {products.map((e)=>{
            return (<div className='col-2'>
                <h4>Adı: {e.urunAd} </h4>
                <h6>Fiyatı: {e.urunFiyat}  </h6>
                <button className='btn btn-primary' onClick={()=> setDetail(e)}>Detaylar</button>
            </div>)
        })}
        {detail && (
            <div className='border border-3 col-4'>
                <h1>Seçilen Urun Detay</h1>
                <h6>Adı: {detail.urunAd}</h6>
                <h6>Fiyat: {detail.urunFiyat}</h6>
                <h6>Açıklama: {detail.description}</h6>
                <button onClick={()=> setDetail("")}>Kapat</button>
            </div>
        )}
    </div>

  )
}

export default ProductList