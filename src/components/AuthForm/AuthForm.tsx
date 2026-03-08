'use client';

import { JSX } from 'react';
import { useStore } from '@store';
import { CustomButton, CustomField } from '@components';
import { useAuthFormMethod, useEffects, useStates } from './lib';
import styles from './AuthForm.module.scss';

/**
   Компонент формы аутентификации.
   Этот компонент отображает поля для ввода данных аутентификации и кнопку для отправки формы.
   Он использует пользовательские хуки для управления состоянием и обработки данных формы.
   @returns {JSX.Element} - Отрендеренный компонент формы аутентификации.
 */
export const AuthForm = (): JSX.Element => {
  const state = useStates();
  const store = useStore();
  const { onSubmit } = useAuthFormMethod({ state, store });
  const { isDisabled, fieldData } = state;
  useEffects({ state, store });

  return (
    <div className={styles.authFormWrapper}>
      <h3 className={styles.authTitle}>Login</h3>
      {fieldData.map((field, index) => (
        <CustomField key={field.id} field={field} />
      ))}
      <CustomButton
        id="signInButton"
        title={'Login'}
        onClick={onSubmit}
        disabled={isDisabled}
      />
    </div>
  );
};
