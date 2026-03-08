import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import { useContactListData } from './lib/useContactList';
import styles from './ContactList.module.scss';

/**
 Компонент `ContactsList` отображает список контактов,
 используя данные, полученные из пользовательского хука `useContactListData`.
 
 @returns {JSX.Element} Элемент списка контактов, состоящий из компонентов `ContactItem`.
 
 @example
 // Пример использования компонента
 <ContactsList />
 */
export const ContactsList = () => {
  const { contactsData } = useContactListData();

  return (
    <div className={styles.contactList}>
      {contactsData.map((data, key) => (
        <ContactItem key={key} {...data} />
      ))}
    </div>
  );
};
