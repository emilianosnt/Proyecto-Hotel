import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../CSS/AdminLayout.css';


const AdminLayout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="admin-layout">
      <div className="admin-body">
        <Sidebar isSidebarVisible={isSidebarVisible} />
        <main className={`admin-layout-content ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
