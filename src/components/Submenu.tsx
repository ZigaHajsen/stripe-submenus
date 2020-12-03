import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/context';

const Submenu: React.FC = () => {
  const { isSubmenuOpen } = useGlobalContext();

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
      Submenus
    </aside>
  );
};

export default Submenu;
