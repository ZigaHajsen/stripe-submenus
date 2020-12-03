import React from 'react';
import { Navbar, Sidebar, Hero, Submenu } from './components';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
};

export default App;
