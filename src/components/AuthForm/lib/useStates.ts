import { useState } from 'react';
import { ETypeField } from '@components';
import type { IFieldData, IUseAuthState } from '../types';

/**
  Хук для управления состоянием аутентификации.
 
  Этот хук предоставляет состояние для имени пользователя, пароля
  и флага доступности кнопки отправки формы.
 
  @returns {IUseAuthState} - Объект с состоянием аутентификации.
 */
export const useStates = (): IUseAuthState => {
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const [fieldData, setFieldData] = useState<IFieldData[]>([]);

  return {
    userName,
    setUserName,
    userPassword,
    setUserPassword,
    isDisabled,
    setDisabled,
    fieldData,
    setFieldData,
  };
};
