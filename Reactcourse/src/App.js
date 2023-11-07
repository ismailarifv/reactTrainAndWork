import logo from './logo.svg'
import './App.css';



function App() {

  return (
    <div className="App">
      <div className="Header">
        <img src={logo} alt="" />
        
        <ul className="links">
          <li><a href="./">Anasayfa</a></li>
          <li><a href="./">İletişim</a></li>
          <li><a href="./">Hakkımızda</a></li>
          <li><a href="./">Giris</a></li>
        </ul>
      </div>
        <div className="Main">
          <div className="Category">
              <ul>
                <li><a href="./">Araba</a></li>
                <li><a href="./">Tekne</a></li>
                <li><a href="./">Yat</a></li>
                <li><a href="./">Uçak</a></li>
                <li><a href="./">Tank</a></li>
                <li><a href="./">Tren</a></li>
              </ul>
          </div>
          <div className="Urun">
            <div className="card">
              <img src={logo} alt="" />
              <p>Araba</p>
              <p>Açıklama: </p>
              <p>Fiyat: </p>
            </div>
            <div className="card">
              <img src={logo} alt="" />
              <p>Tekne</p>
              <p>Açıklama: </p>
              <p>Fiyat: </p>
            </div>
            <div className="card">
              <img src={logo} alt="" />
              <p>Yat</p>
              <p>Açıklama: </p>
              <p>Fiyat: </p>
            </div>
            <div className="card">
              <img src={logo} alt="" />
              <p>Uçak</p>
              <p>Açıklama: </p>
              <p>Fiyat: </p>
            </div>
            <div className="card">
              <img src={logo} alt="" />
              <p>Tank</p>
              <p>Açıklama: </p>
              <p>Fiyat: </p>
            </div>
            <div className="card">
              <img src={logo} alt="" />
              <p>Tren</p>
              <p>Açıklama: </p>
              <p>Fiyat: </p>
            </div>

          </div>
        </div>
    </div>
  );
}

export default App;
