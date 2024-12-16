import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AdminHeader from '../components/AdminHeader';
import Header1 from '../components/Header1';  // Import Header1

function MainLayout({ children, isLoggedIn, isAdminLoggedIn, onLogout }) {
  return (
    <>
      {/* Render AdminHeader if logged in as admin, Header if logged in as regular user */}
      {!isLoggedIn ? (
        <Header1 />  // Show Header1 for users who aren't logged in
      ) : isAdminLoggedIn ? (
        <AdminHeader onLogout={onLogout} />  // Show AdminHeader for logged-in admin
      ) : (
        <Header onLogout={onLogout} />  // Show Header for regular logged-in users
      )}
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
