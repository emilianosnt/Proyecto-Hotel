import React from "react";
import "../CSS/Main.css";

const Main = () => {
  return (
    <div className="container">
      <div className="tarjetas-grid">
        <div className="tarjeta">
          <div className="tarjeta-imagen sauna">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/614979180.jpg?k=9592bb7b9582e40a1578ca81a84c6c0d64766ba081ec8cfb34d509e4f41dad2f&o="
              alt="Sauna Finlandés"
            />
          </div>
          <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">Sauna Finlandés</h3>
            <p className="tarjeta-descripcion">
              Relájate en nuestro sauna tradicional finlandés con temperatura
              controlada y ambiente purificado. Ideal para desintoxicar el
              cuerpo y relajar la mente.
            </p>
            <div className="tarjeta-caracteristica">
              <span className="caracteristicas-etiqueta">Temperatura 80-90°C</span>
              <span className="caracteristicas-etiqueta">Cabina de madera</span>
              <span className="caracteristicas-etiqueta">Aromaterapia</span>
              <span className="caracteristicas-etiqueta">Toallas incluidas</span>
            </div>
            <div className="tarjeta-info">
              <span className="horario">6:00 - 22:00</span>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="tarjeta-imagen buffet">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/636611154.jpg?k=0629409c94081fb6814bbdffed15bd23315bb1f7fece98a6c0181acae2b3140b&o="
              alt="Buffet Internacional"
            />
          </div>
          <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">Buffet Internacional</h3>
            <p className="tarjeta-descripcion">
              Disfruta de nuestra variada selección gastronómica con platos
              internacionales, opciones vegetarianas y postres artesanales
              frescos diariamente.
            </p>
            <div className="tarjeta-espaciado">
                <div className="tarjeta-caracteristica">
                    <span className="caracteristicas-etiqueta">Cocina internacional</span>
                    <span className="caracteristicas-etiqueta">Opciones veganas</span>
                    <span className="caracteristicas-etiqueta">Postres artesanales</span>
                    <span className="caracteristicas-etiqueta">Estación de jugos</span>
                </div>
                <div className="tarjeta-info">
                    <span className="horario">7:00 - 23:00</span>
                </div>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="tarjeta-imagen piscina">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/614978696.jpg?k=25cf98d97bd7831a8e23a945820787fc1ce1486a93be086ffbdb8ad40d43a7d9&o="
              alt="Piscina Climatizada"
            />
          </div>
          <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">Piscina Climatizada</h3>
            <p className="tarjeta-descripcion">
              Piscina climatizada de 25 metros con zona poco profunda, perfecta
              para nadar o simplemente relajarse. Incluye área de descanso con
              reposeras.
            </p>
            <div className="tarjeta-espaciado">
                <div className="tarjeta-caracteristica">
                    <span className="caracteristicas-etiqueta">25m de largo</span>
                    <span className="caracteristicas-etiqueta">Climatizada</span>
                    <span className="caracteristicas-etiqueta">Zona infantil</span>
                    <span className="caracteristicas-etiqueta">Reposeras</span>
                </div>
                <div className="tarjeta-info">
                    <span className="horario">8:00 - 20:00</span>
                </div>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="tarjeta-imagen frente-hotel">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/197271703.jpg?k=379f122aea13b394bf05b227647dda6c915097f2b0a3badf968c0ba66162cc65&o="
              alt="Frente del Hotel"
            />
          </div>
          <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">Frente del Hotel</h3>
            <p className="tarjeta-descripcion">
              Impresionante fachada de arquitectura contemporánea con jardines
              paisajísticos. Entrada principal con servicio de valet parking y
              recepción 24 horas. Amplios ventanales que ofrecen vistas
              panorámicas.
            </p>
            <div className="tarjeta-espaciado">
                <div className="tarjeta-caracteristica">
                    <span className="caracteristicas-etiqueta">Valet parking</span>
                    <span className="caracteristicas-etiqueta">Jardines</span>
                    <span className="caracteristicas-etiqueta">Recepción 24hs</span>
                    <span className="caracteristicas-etiqueta">Acceso wheelchair</span>
                </div>
                <div className="tarjeta-info">
                    <span className="horario">24 horas</span>
                </div>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="tarjeta-imagen gimnasio">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/614979411.jpg?k=8d73f1d71ff17e6eabc81b9748913bf12d4e229c946a519e8f32148dffd36b1f&o="
              alt="Gimnasio Fitness"
            />
          </div>
          <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">Gimnasio Fitness</h3>
            <p className="tarjeta-descripcion">
              Centro de fitness completamente equipado con máquinas de última
              generación, pesas libres y área de cardio con vista panorámica a
              toda la gran ciudad. Incluye salas para clases grupales y
              entrenamiento funcional.
            </p>
            <div className="tarjeta-espaciado">
                <div className="tarjeta-caracteristica">
                    <span className="caracteristicas-etiqueta">Equipos Technogym</span>
                    <span className="caracteristicas-etiqueta">Pesas libres</span>
                    <span className="caracteristicas-etiqueta">Área cardio</span>
                    <span className="caracteristicas-etiqueta">Instructor</span>
                </div>
                <div className="tarjeta-info">
                    <span className="horario">5:00 - 23:00</span>
                </div>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="tarjeta-imagen lobby">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/7a/51/ed/lobby--v13047574.jpg?w=2000&h=-1&s=1"
              alt="Lobby Principal"
            />
          </div>
          <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">Lobby Principal</h3>
            <p className="tarjeta-descripcion">
              Espacio amplio y elegante diseñado para recibir a los huéspedes,
              con áreas de descanso confortables, atención personalizada y
              ambiente acogedor para iniciar una experiencia memorable en el
              hotel.
            </p>
            <div className="tarjeta-espaciado">
                <div className="tarjeta-caracteristica">
                    <span className="caracteristicas-etiqueta">Equipos Technogym</span>
                    <span className="caracteristicas-etiqueta">Pesas libres</span>
                    <span className="caracteristicas-etiqueta">Área cardio</span> <br />
                    <span className="caracteristicas-etiqueta">Instructor</span> <br />
                </div>
            </div>
            <div className="tarjeta-info">
              <span className="horario">24 horas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
