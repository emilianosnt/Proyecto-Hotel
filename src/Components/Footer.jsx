
import React from "react";
import {FaInstagram,FaFacebookF, FaEnvelope,FaWhatsapp,} from "react-icons/fa";
import "..Components/Footer.css"; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-banner">
        ¡Bienvenido! Aqui podrás encontrar la información clave sobre el Hotel
      </div>

      <div className="footer-content">
        <h2 className="footer-title" style={{ textAlign: "center" }}>
          HOTEL CALIFORNIA
        </h2>
        <div
          style={{ fontSize: "24px", color: "#DEB887", textAlign: "center" }}
        >
          ⭐⭐⭐⭐⭐
        </div>
      </div>

      <div className="footer-content">
        <div className="media-section">
          <div className="footer-pasillo">
            <h2 style={{ textAlign: "center" }}></h2>
            <img
              width="100%"
              height="500"
              src="https://scontent.ftuc7-1.fna.fbcdn.net/v/t39.30808-6/515065510_4008862962687400_673786367202197877_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHP7doZLXxpA20elrk8A-KY14CLtG2MjEfXgIu0bYyMRxtogm3vfuA-8qm-08mdBgAH6Oj96T7zYCpWpO_XJ9rx&_nc_ohc=e8oEXTsC6oQQ7kNvwFe2ufU&_nc_oc=AdmFd6HDJ3-nErOOS97Aa_SBcDzKTeEKWumgSV6iSZN4k4sElE89v7OFIbyHyEMKPLE&_nc_zt=23&_nc_ht=scontent.ftuc7-1.fna&_nc_gid=57Xp4GZyFRWDs64Ving-Lg&oh=00_AfMsrz8Q0lQZ8JO-LzdS4W3qw9LEkjYgzYalAVCxjd4KqQ&oe=686E1BDE"
            />
          </div>
          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0123456789!2d-65.227654321!3d-26.823456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9424a123456789ab%3A0xcdef0123456789ab!2sSan+Miguel+de+Tucum%C3%A1n%2C+Tucum%C3%A1n%2C+Argentina!5e0!3m2!1ses!2sus!4v1234567890123!5m2!1ses!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              width="100%"
              height="500"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/40riOy7x9W7GXjyGp4pjAv?utm_source=generator&theme=0"
              allow="autoplay 1; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div>
        <div className="galeria">
          <img
            src="https://plus.unsplash.com/premium_photo-1726862460195-61c9f6ebdee9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Limpieza"
          />
          <img
            src="https://images.unsplash.com/photo-1616363088386-31c4a8414858?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="estacionamiento"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1723291340092-2eb79b9b878a?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pers buffet"
          />
          <img
            src="https://media.istockphoto.com/id/1939516721/photo/relax-sleep-and-woman-at-spa-for-massage-beauty-service-or-aromatherapy-for-holistic.jpg?s=1024x1024&w=is&k=20&c=Xf_Jtdem0eCqnMLGbSvvV6zYUV3PxZqbDt-JcyogyQY="
            alt="spa"
          />
          <img
            src="https://media.istockphoto.com/id/2063279233/photo/electronic-card-key-for-open-door-in-hotel-smart-card-key-to-lock-and-unlock-door-security.jpg?s=1024x1024&w=is&k=20&c=_5RdCILkWn9SeRZbwvJvbiQ5TH-jBQlv-zblzIsveKQ="
            alt="puerta"
          />
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.FKo2--v1dUdQNrH3Rt_-aQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Imagen de Hab"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ingreso"
          />
          <img
            src="https://images.unsplash.com/photo-1534679541758-8dc76ff8081d?q=80&w=908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Comedor"
          />
          <img
            src="https://media.istockphoto.com/id/2188358193/photo/family-having-breakfast-in-hotel.jpg?s=1024x1024&w=is&k=20&c=-CFTOGodDNaK5WMGwqSBR_LVf3PJqnbqLflIirJcCk8="
            alt="Buffet"
          />
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Piscina"
          />
        </div>
      </div>

      <p className="footer-contact">CONTACTO Y REDES SOCIALES</p>

      <div className="footer-socials">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a href="mailto:contacto@hotelcalifornia.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="http://wa.me/543815012026"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          aria-label="WhatsApp"
        >
          <FaWhatsapp fontSize={40} />
        </a>
      </div>
      <hr />

      <div className="footer-copyright">
        © 2025 Hotel California. Todos los derechos reservados. <br />
        Prohibida la reproducción total o parcial sin permiso.
      </div>
    </div>
  );
};

export default Footer;