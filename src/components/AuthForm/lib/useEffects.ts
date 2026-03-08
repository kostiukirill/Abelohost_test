import { useEffect } from 'react';
import { ETypeField } from '@components';
import { IUseAuthProps } from '../types';

/**
  Хук для управления эффектами формы аутентификации.
 
  @param {IUseAuthProps} props - Свойства, переданные в хук, включая состояние аутентификации.
 */
export const useEffects = (props: IUseAuthProps) => {
  const {
    state: {
      userName,
      userPassword,
      fieldData,
      setDisabled,
      setFieldData,
      setUserName,
      setUserPassword,
    },
  } = props;

  useEffect(() => {
    setDisabled(!(userPassword.length && userName.length));
    setFieldData([
      {
        type: ETypeField.text,
        value: userName,
        label: 'User name',
        id: 'UserName',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setUserName(e.target.value),
        errorValidateMessage: undefined,
      },
      {
        type: ETypeField.password,
        value: userPassword,
        label: 'Password',
        id: 'PasswordField',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setUserPassword(e.target.value),
        errorValidateMessage: undefined,
      },
    ]);
  }, [userPassword, userName, setDisabled]);

  useEffect(() => console.log(fieldData), [fieldData]);
};
