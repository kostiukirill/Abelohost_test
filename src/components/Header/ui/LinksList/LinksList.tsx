import React, { useState } from 'react';
import { LinkItem } from '../LinkItem/LinkItem';
import { useLinkListData } from './lib';
import styles from './LinkList.module.scss';
import { BurgerMenuButton } from './ui';

/**
 Компонент `LinksList` отображает список навигационных ссылок,
  используя данные, полученные из пользовательского хука `useLinkListData`.
 
 @returns {JSX.Element} Элемент списка навигационных ссылок,
 состоящий из компонентов `LinkItem`.
  
 @example
  // Пример использования компонента
 <LinksList />
 */
export const LinksList = () => {
  const { linksData } = useLinkListData();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className={styles.linkListWrapper}>
      <div className={styles.burgerButton}>
        <BurgerMenuButton onClick={() => setMenuOpen((prev) => !prev)} />
      </div>
      <div className={`${styles.linkList} ${isMenuOpen && styles.open}`}>
        {linksData.map((data, key) => (
          <LinkItem {...data} key={key} />
        ))}
      </div>
    </div>
  );
};
