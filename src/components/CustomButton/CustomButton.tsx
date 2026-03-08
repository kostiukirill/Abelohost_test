'use client';

import React, { JSX, type FC } from 'react';
import styles from './styles/CustomButton.module.scss';
import type { ICustomButtonProps } from './types';

/**
  Компонент кнопки с настраиваемым стилем и поведением.
 
  Этот компонент рендерит кнопку, которая может быть отключена
  и обрабатывает клик, вызывая переданную функцию.
 
  @param {ICustomButtonProps} props - Свойства, переданные в компонент.
  @param {() => void} props.onClick - Функция, вызываемая при клике на кнопку.
  @param {string} props.title - Текст, отображаемый на кнопке.
  @param {boolean} props.disabled - Флаг, указывающий, должна ли кнопка быть отключена.
  @param {string} [props.id] - Уникальный идентификатор кнопки (опционально).
  @returns {JSX.Element} - Элемент кнопки, готовый к рендерингу.
 */
export const CustomButton: FC<ICustomButtonProps> = (props): JSX.Element => {
  const { onClick, title, disabled, id } = props;

  return (
    <button
      id={id}
      disabled={disabled}
      className={!!disabled ? styles.buttonDisabled : styles.button}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
