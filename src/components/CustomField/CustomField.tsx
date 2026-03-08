'use client';

import { useEffect } from 'react';
import styles from './styles/CustomField.module.scss';
import { ETypeField, type IFieldProps } from './types';

/**
 Компонент `CustomField` представляет собой универсальное поле ввода, которое может принимать различные типы данных.
 
 @template T - Тип поля, основанный на перечислении `ETypeField`.
 @param {Object} props - Свойства компонента.
 @param {IFieldProps<T>} props.field - Объект, представляющий поле, включая его свойства.
 @param {ETypeField} props.field.type - Тип поля ввода (например, text, number, checkbox и т.д.).
 @param {string} props.field.value - Значение поля ввода. Может быть строкой или булевым значением для чекбокса.
 @param {string} props.field.label - Метка поля, которая будет отображаться рядом с полем ввода.
 @param {string} props.field.id - Уникальный идентификатор для поля ввода, используемый для связывания метки и поля.
 @param {function} props.field.onChange - Функция обратного вызова, вызываемая при изменении значения поля ввода.
 
 @returns {JSX.Element} Элемент, представляющий поле ввода с меткой и обработчиком изменений.
 */
export const CustomField = <T extends ETypeField>({
  field,
}: IFieldProps<T>) => {
  const { type, value, label, id, onChange, errorValidateMessage } = field;

  return (
    <div
      className={
        type === ETypeField.checkbox
          ? styles.fieldWrapperRow
          : styles.fieldWrapperCol
      }
    >
      {type !== ETypeField.checkbox && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        min={type === ETypeField.number ? 1 : undefined}
        value={typeof value === 'boolean' ? undefined : value}
        checked={typeof value === 'boolean' ? value : undefined}
        onChange={onChange}
        className={styles[`${type}Field`]}
      />
      {type === ETypeField.checkbox && <label htmlFor={id}>{label}</label>}
      <div className={styles.validateMessage}>{errorValidateMessage}</div>
    </div>
  );
};
