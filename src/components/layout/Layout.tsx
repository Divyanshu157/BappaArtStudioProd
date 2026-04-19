import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  transparentNavbar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, transparentNavbar = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar transparent={transparentNavbar} />
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
