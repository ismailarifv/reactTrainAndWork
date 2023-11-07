import logo from './logo.svg'
import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <img className="logo" src={logo} alt="" />
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">Anasayfa</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hakkımızda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ürünler</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">İletişim</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row d-flex justify-content-around">
          <div className="col-2 rounded rounded-4 bg-info-subtle mt-4  text-center border border-info border-4 category ">
            <h1>Kategori</h1>
            <ul >
              <li><a href="#">Araba</a></li>
              <li><a href="#">Uçak</a></li>
              <li><a href="#">Tank</a></li>
              <li><a href="#">Tren</a></li>
              <li><a href="#">Bisiklet</a></li>
              <li><a href="#">Gemi</a></li>
            </ul>
          </div>
          <div className="col-9 rounded rounded-4 bg-info-subtle mt-4  text-center border border-info border-4 category">
          <div className="row d-flex justify-content-around ">
            <h1>Ürünler</h1>
          <div className="card col-3  mt-2" >
            
            <img src="./images/araba.jpg" className="card-img-top mt-1" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Araba</h5>
              <p className="card-text">Açıklama: </p>
              <p className="card-text">Fiyat: </p>
              <a href="#" className="btn btn-primary">Satın Al</a>
            </div>
          </div>
          <div className="card col-3 mt-2" >
            
            <img src="./images/ucak.jpg" className="card-img-top mt-1" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Uçak</h5>
              <p className="card-text">Açıklama: </p>
              <p className="card-text">Fiyat: </p>
              <a href="#" className="btn btn-primary">Satın Al</a>
            </div>
          </div>
          <div className="card col-3 mt-2" >
            
            <img src="./images/tank.jpg" className="card-img-top mt-1" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Tank</h5>
              <p className="card-text">Açıklama: </p>
              <p className="card-text">Fiyat: </p>
              <a href="#" className="btn btn-primary">Satın Al</a>
            </div>
          </div>
          </div>
          <div className="row d-flex justify-content-around mb-2">
          <div className="card col-3 mt-2" >
            
            <img src="./images/tren.jpg" className="card-img-top mt-1" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Tren</h5>
              <p className="card-text">Açıklama: </p>
              <p className="card-text">Fiyat: </p>
              <a href="#" className="btn btn-primary">Satın Al</a>
            </div>
          </div>
          <div className="card col-3 mt-2" >
            
            <img src="./images/bisiklet.jpg" className="card-img-top mt-1" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Bisiklet</h5>
              <p className="card-text">Açıklama: </p>
              <p className="card-text">Fiyat: </p>
              <a href="#" className="btn btn-primary">Satın Al</a>
            </div>
          </div>
          <div className="card col-3 mt-2" >
            
            <img src="./images/gemi.jpg" className="card-img-top mt-1" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Gemi</h5>
              <p className="card-text">Açıklama: </p>
              <p className="card-text">Fiyat: </p>
              <a href="#" className="btn btn-primary">Satın Al</a>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
