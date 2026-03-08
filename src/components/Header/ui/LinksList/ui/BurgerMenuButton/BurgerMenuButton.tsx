import React, { FC, useState } from 'react';
import styles from './BurgerMenuButton.module.scss';
import { IBurgerMenuButtonProps } from './types/BurgerMenuButton.types';

export const BurgerMenuButton: FC<IBurgerMenuButtonProps> = ({ onClick }) => {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        setActive((prev) => !prev);
        onClick();
      }}
      className={`${styles.burger} ${isActive && styles.active}`}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};
