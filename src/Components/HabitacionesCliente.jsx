import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../CSS/HabitacionesCliente.css";
import { FaWifi, FaTv, FaBed, FaBath } from "react-icons/fa";
const HabitacionesCliente = () => {
  const habitaciones = [
    {
      id: 1,
      titulo: "Habitación Simple",
      descripcion:
        "Perfecta para viajeros solos. Equipada con todas las comodidades modernas para una estancia confortable.",
      imagen: "/Images/habitacion1.png",
      servicios: [
        { icon: <FaBed />, text: "1 Cama" },
        { icon: <FaWifi />, text: "Wifi Gratis" },
        { icon: <FaTv />, text: "TV Plana" },
      ],
    },
    {
      id: 4,
      titulo: "Habitación Doble",
      descripcion:
        "Ideal para familias o amigos. Cuenta con dos camas y un espacio amplio para mayor comodidad.",
      imagen: "/Images/habitacion4.png",
      servicios: [
        { icon: <FaBed />, text: "2 Camas" },
        { icon: <FaWifi />, text: "Wifi Gratis" },
        { icon: <FaTv />, text: "TV Plana" },
        { icon: <FaBath />, text: "Baño privado" },
      ],
    },
    {
      id: 3,
      titulo: "Suite de Lujo",
      descripcion:
        "Disfruta de una experiencia de lujo con vistas panorámicas, una sala de estar separada y servicios exclusivos.",
      imagen: "/Images/habitacion3.png",
      servicios: [
        { icon: <FaBed />, text: "Cama King" },
        { icon: <FaWifi />, text: "Wifi Premium" },
        { icon: <FaTv/>, text: "Smart TV 55'" },
        { icon: <FaBath />, text: "Bañera" },
      ],
    },
  ];
 
  return (
    <div>
      <Header/>
      <div className="habitaciones-cliente-container">
        <div className="main">
          <video src="/Images/Hotel_California.mp4" autoPlay loop muted className="background-video" />
          <div className="main-content">
            <h1 className="title">Nuestras Habitaciones</h1>
            <p className="subtitle">
              Explora nuestras cómodas y elegantes habitaciones diseñadas para brindarte una estancia inolvidable.
            </p>
          </div>
        </div>
        <div className="galeria-habitaciones">
          {habitaciones.map((habitacion) => (
            <div key={habitacion.id} className="card-habitacion">
              <img src={habitacion.imagen} alt={habitacion.titulo} className="habitacion-imagen" />
              <h3 className="habitacion-titulo">{habitacion.titulo}</h3>
              <p className="habitacion-descripcion">{habitacion.descripcion}</p>
              <div className="habitacion-servicios">
                {habitacion.servicios.map((servicio, index) => (
                  <div key={index} className="servicio-item">
                    {servicio.icon}
                    <span>{servicio.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="texto-reservar">¿Listo para una experiencia inolvidable? Reserva tu habitación hoy mismo y comienza a planificar tu escapada perfecta con nosotros.</p>
        <br />
        <br />
        <br />
        <Link to="" className="boton-reservar">
          Reservar Ahora
        </Link>
      </div>
      <Footer/>
    </div>
  );
};
 
export default HabitacionesCliente;