import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import menuIcon from '../../assets/menu.svg';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.menue} onClick={toggleSidebar}>
        <img src={menuIcon}  />
      </button>
      <div className={isOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar}>
        <a href="#">Sign in</a>
        <a href="#">Sign up</a>
        <a href="#">Categories</a>
        <a href="#">Products</a>
        <a href="#">Cart</a>
      </div>
    </div>
  );
}

export default Sidebar;
