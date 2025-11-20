import React from 'react';
import '../CSS/HabitacionesDashboardPage.css';

const HabitacionesDashboardPage = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        {/* Top App Bar */}
        <header className="top-app-bar">
          <button className="menu-button">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="page-title">Gestionar Habitaciones</h1>
          <div className="spacer"></div>
        </header>
        {/* Search Bar */}
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <span className="material-symbols-outlined search-icon">search</span>
            <input className="search-input" placeholder="Buscar por nombre o número" value=""/>
          </div>
        </div>
        {/* Tabs */}
        <nav className="tabs-nav">
          <div className="tabs-container">
            <a className="tab-link active" href="#">
              <p className="tab-text active">Simples</p>
            </a>
            <a className="tab-link" href="#">
              <p className="tab-text">Dobles</p>
            </a>
            <a className="tab-link" href="#">
              <p className="tab-text">Suites</p>
            </a>
          </div>
        </nav>
        {/* Room List */}
        <main className="room-list">
          {/* Room Card 1 */}
          <div className="room-card">
            <div className="room-image" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCN45xC_w-x21se8lpMZ1vCK2U5sJ4fFuptGYA4OtJihZZOGEscy49hrrUJYt0v7dgowtklaMGHohUZQCdcGv479UyZaZz1jHe3DKcfU0BtvljRpye_Mo1Wa964jYAH026NkzNl2dfwyK7FdGZO82_rS7UzPz-2oGK-k0LCRyqqZV0f4zZHXX_JTqxeyzOe7TgpC8tefRdyizdPP0my5T3bBvz89yhYKLy-lzH6g6oq3m3G5rMlltq5ty2WHbDVb6QDZc25-88CbFE")'}}></div>
            <div className="room-details">
              <p className="room-name">Habitación 101</p>
              <p className="room-price">$120/noche</p>
              <div className="room-status-wrapper">
                <span className="room-status available">Disponible</span>
              </div>
            </div>
            <button className="more-button">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          {/* Room Card 2 */}
          <div className="room-card">
            <div className="room-image" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZwHaQno2W6Abv87o-2U42dRjoy-TWQvLzNnQ3k3YiN2sZH6hWw3FfdbIbJcHUZy9dN24G-BbIZsHE3NoeD45yViLH-_x_YCfxKJMBOkQnuxEkTumB6jH8h9JvIn-HyNJ7ZnRU1cFjOHVzoXVHiGhc4FnZKuFBR9Z3HEiQO8plFSYA65H48mOh5a0Px3FeUkdQiMRwFp0q-DJx0ukO2sPsOTIMjsBIMGPn9nFHp1S0iq-HJlb3hQxvZ5AhtVynl4SDZby4BVCa4uY")'}}></div>
            <div className="room-details">
              <p className="room-name">Habitación 102</p>
              <p className="room-price">$125/noche</p>
              <div className="room-status-wrapper">
                <span className="room-status occupied">Ocupada</span>
              </div>
            </div>
            <button className="more-button">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          {/* Room Card 3 */}
          <div className="room-card">
            <div className="room-image" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbgbpJyqXtPP7_gAkHg3Ux-PhR-WgXJXqMLSajbgEqrX7fPR5Marcn6J34E-mL6ygoOhyoh-0SHDF5Tfk_6w_ljRReJavkWEMgwL2YyAA-vFG_aXsT3_iKQBuuEWuS8wBkNujXui2bbpOFxztR8tRiLFN2fO7ZmR8JeEdmRNToDMIy9kSeYQlP3BJpRWXKqQXgQfxdZKa6qncPP_63wd31MsShwYvqbgM_0LLS0-PUC-CFkBS8hXS0i_2YbeJFeeJZYCG1ncfI-Q")'}}></div>
            <div className="room-details">
              <p className="room-name">Habitación 103</p>
              <p className="room-price">$110/noche</p>
              <div className="room-status-wrapper">
                <span className="room-status cleaning">En Limpieza</span>
              </div>
            </div>
            <button className="more-button">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          {/* Empty State Example */}
          <div className="empty-state-card">
            <div className="empty-state-icon-wrapper">
              <span className="material-symbols-outlined">king_bed</span>
            </div>
            <p className="empty-state-title">Aún no hay Suites</p>
            <p className="empty-state-text">Toca el botón '+' para agregar la primera.</p>
          </div>
        </main>
      </div>
      {/* Floating Action Button (FAB) */}
      <button className="fab-button">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default HabitacionesDashboardPage;
