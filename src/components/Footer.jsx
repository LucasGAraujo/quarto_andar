import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import lucas from '../assets/lucas.png'
import joao from '../assets/joao.png'
import carp from '../assets/carp.png'
import pedro from '../assets/pedro.png'
import 'leaflet/dist/leaflet.css';
import './stylesComponents/footer.css';

const Footer = () => {
  const mapRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('entraremos em contato em breve!')
    setName('');
    setEmail('');
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.remove();
    }

    const map = L.map('map').setView([-22.913586, -43.175251], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([-22.913586, -43.175251])
      .addTo(map)
      .bindPopup('Instituto Infnet')
      .openPopup();

    mapRef.current = map;
  }, []);

  return (
    <footer className="footer">
      <div className="footer_1">
        <h3>Trabalhe Conosco</h3>
        <form onSubmit={handleSubmit}>
          <div className="email_text">
            <label>Seu Melhor Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="name_text">
            <label>Seu Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <button type="submit">Confirme</button>
        </form>
      </div>
      <div className="footer_2">
        <div className='card-f'><div className='card_footer'> <h3>Lucas Gomes</h3> <img src={lucas}alt="lucas" /></div><button><a href="https://lucasportfolio-pi.vercel.app/" target={'_blank'}> Veja portfolio</a></button></div>
        <div className='card-f'><div className='card_footer'><h3>Joao Miguel</h3><img src={joao}alt="joao" /></div><button><a href="https://portf-joao-miguel.vercel.app/" target={'_blank'}> Veja portfolio</a></button></div>
        <div className='card-f'><div className='card_footer'><h3>Kaique Coelho</h3><img src={carp}alt="carp" /></div><button><a href=""> Veja portfolio</a></button></div>
        <div className='card-f'><div className='card_footer'><h3>Pedro Cuber</h3><img src={pedro}alt="pedro" /></div><button><a href=""> Veja portfolio</a></button></div>
      </div>
      <div className="footer_3">
        <h3>Nosso Escritorio</h3>
        <h5>Espaço moderno com aparelhos de última geração.</h5>
        <div id="map" className="map-container"></div>
      </div>
    </footer>
  );
};

export default Footer;
