import React from 'react';
import Link from 'next/link';
import { IContactData } from '../../types';
import { EContactAction } from '../../types/ContactsList.types';
import styles from './ContactItem.module.scss';

/**
 Компонент `ContactItem` представляет собой элемент списка контактов,
 который отображает ссылку на контактные данные (например, email, телефон, адрес).
 
 param {IContactData<EContactAction>} props - Свойства, содержащие данные о контакте.
 @param {string} props.title - Заголовок или название контакта, отображаемое пользователю.
 param {EContactAction} props.action - Действие, связанное с контактом (например, `mailto:` или `tel:`).
 @param {string} props.value - Значение контакта (например, адрес электронной почты или номер телефона).
 param {string} props.type - Тип контакта, определяющий стиль ссылки (например, 'mail', 'phone', 'address').
 
 returns {JSX.Element} Элемент списка контактов в виде ссылки.
 */
export const ContactItem = (props: IContactData<EContactAction>) => {
  const { title, action, value, type } = props;

  return (
    <Link
      datatype={action}
      className={`${styles[`${type}Link`]} ${styles.link}`}
      href={`${action}${value}`}
    >
      {title}
    </Link>
  );
};
