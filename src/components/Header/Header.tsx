'use client';

import styles from './Header.module.scss';
import { ContactsList, LoginLogoutButton, LinksList } from './ui';

/**
 Компонент `Header` представляет собой заголовок веб-приложения.
 Он включает в себя список контактов, кнопку входа/выхода и ссылки на другие страницы.
 
 @component
 
 @returns {JSX.Element} Элемент, представляющий заголовок приложения, содержащий:
 - `ContactsList`: Компонент, отображающий список контактной информации.
 - `LoginLogoutButton`: Компонент, предоставляющий функциональность входа и выхода.
 - `LinksList`: Компонент, отображающий навигационные ссылки.
 */
export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topHeader}>
        <ContactsList />
        <LoginLogoutButton />
      </div>
      <div className={styles.mainHeader}>
        <h1 className={styles.mainTitle}>Abelohost Shop</h1>
      </div>
      <div className={styles.bottomHeader}>
        <LinksList />
      </div>
    </div>
  );
};
