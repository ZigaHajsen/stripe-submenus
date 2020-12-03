import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/context';

const Submenu: React.FC = () => {
  const { isSubmenuOpen, location } = useGlobalContext();

  const container = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;

    submenu!.style.left = `${center}px`;
    submenu!.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      Submenus
    </aside>
  );
};

export default Submenu;
