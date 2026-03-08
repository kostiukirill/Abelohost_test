'use client';

import { useStore } from '@store';
import styles from './Footer.module.scss';

/**
 Компонент `footer` представляет собой конец страницы веб-приложения.
 Он включает в себя нынешний год и имя пользователя.
  
 @component
 
 @returns {JSX.Element} Элемент, представляющий конец страницы приложения, содержащий:
 нынешний год и имя пользователя.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { userData } = useStore();

  return (
    <div
      className={styles.topFooter}
    >{`${currentYear} ${!!userData ? `Logged as ${userData?.email}` : ''}`}</div>
  );
};
