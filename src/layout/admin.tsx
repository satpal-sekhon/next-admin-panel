'use client';

import AdminNavbar from "@/components/admin/navbar";
import AdminSidebar from "@/components/admin/sidebar";
import { useEffect, useState } from "react";

export default function AdminLayout() {
  const [expandedSidebar, setExpandedSidebar] = useState(true);

  const toggleSidebar = (): void => {
    setExpandedSidebar((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 768;
      setExpandedSidebar(!isMobileScreen);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (<>
    <AdminNavbar toggleSidebar={toggleSidebar} />
    <AdminSidebar expandedSidebar={expandedSidebar} />
  </>);
}
