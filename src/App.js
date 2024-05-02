import logo from './resources/LogoTrufa.png';
import React, { useState } from 'react';
import './App.css';
import { ReactComponent as Taza1 } from './resources/coffee-cup-svgrepo-com.svg';
import { ReactComponent as Taza2 } from './resources/coffee-svgrepo-com.svg';
import { ReactComponent as Galleta } from './resources/cookie-svgrepo-com.svg';
import { ReactComponent as Wifi } from './resources/wifi-svgrepo-com.svg';
import { ReactComponent as Menu } from './resources/book-minimalistic-svgrepo-com.svg';
import { ReactComponent as Google } from './resources/google-178-svgrepo-com.svg';
import { ReactComponent as Insta } from './resources/instagram-svgrepo-com.svg';

function App() {
  const menuPdfUrl = `${process.env.PUBLIC_URL}/Menu.pdf`
  const [isVisible, setIsVisible] = useState(false);

  const mostrarWifi = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div className="ContenedorPrincipal">
      <div className="ImagenLogoContenedor"> 
        <img src={logo} alt='Logo Trufa cafe' className='ImagenLogo'/>
      </div>
      <div className='ContenedorContenido'>
        <div className='Separador'>
          <hr className='LineaSeparador'></hr>
          <Taza1 className='ImgSeparador'/>
          <hr className='LineaSeparador' ></hr>
        </div>
        <div className='ContenedorBoton'>
          <a href={menuPdfUrl} target="_blank" className='AnclaBoton' rel="noopener noreferrer"> 
            <button className='Boton' id='BtnMenu'> <Menu className='MenuLogo'/> MENÚ </button>
          </a>
        </div>
        <div className='Separador'>
          <hr className='LineaSeparador'></hr>
          <Taza2 className='ImgSeparador'/>
          <hr className='LineaSeparador' ></hr>
        </div>
        <div className='ContenedorBoton'>
          <a className='AnclaBoton' href="https://g.co/kgs/RSnexwa"> 
            <button className='Boton' id='BtnExp'> <Google className='GoogleLogo'/>  COMPARTE TU EXPERIENCIA </button>
          </a>
        </div>
        <div className='Separador'>
          <hr className='LineaSeparador'></hr>
          <Galleta className='ImgSeparador'/>
          <hr className='LineaSeparador' ></hr>
        </div>
        <div className='ContenedorBoton' >
          <a className='AnclaBoton' href="https://www.instagram.com/trufacaffe"> 
            <button className='Boton' id='BtnIns'> <Insta className='InstaLogo'/>  SÍGUENOS  </button>  
          </a>
        </div>
        <div className='Separador'>
          <hr className='LineaSeparador'></hr>
          <Wifi className='ImgSeparador'/>
          <hr className='LineaSeparador' ></hr>
        </div>
        <div className='ContenedorBoton' onClick  ={mostrarWifi}>
          <button className='Boton' id='BtnWifi'> WIFI </button>  
        </div>
        {isVisible && (
        <div className='WiFiCont' id='NombreWifi'>
          <span className='DescripcionWifi'>Nombre: </span>
          <span className='ContenidoWifi'>TRUFA CAFÉ</span>
        </div>
        )}
        {isVisible && (
        <div className='WiFiCont'>
          <span className='DescripcionWifi'>Contraseña:</span>
          <span className='ContenidoWifi'> CafeciN2024</span>
        </div>
        )}
      </div>
      
    </div>
  );
}

export default App;
