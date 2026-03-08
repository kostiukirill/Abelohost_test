import { useRouter } from 'next/navigation';
import { doRequest, EApiMethods } from '@services';
import type {
  IUseAuthFormMethodsReturns,
  IUseAuthProps,
  IUserDataReturn,
} from '../types';

/**
  Хук для обработки методов аутентификации.
 
  @param {IUseAuthProps} props - Свойства, переданные в хук, включая состояние аутентификации и хранилище.
  @returns {IUseAuthFormMethodsReturns} - Объект с методами.
*/
export const useAuthFormMethod = (
  props: IUseAuthProps
): IUseAuthFormMethodsReturns => {
  const {
    state: { fieldData, setFieldData },
    store: { setThrobberActive, setUserData, setErrorMessage },
  } = props;
  const router = useRouter();

  const onSubmit = async () => {
    if (fieldData.some((data) => data.value.length < 3)) {
      fieldData.map((data, index) => {
        if (data.value.length < 3) {
          setFieldData((prev) => {
            const newData = [...prev];
            newData[index] = {
              ...prev[index],
              errorValidateMessage:
                'The number of characters cannot be less than three',
            };

            return newData;
          });
        }
      });
    } else {
      setThrobberActive(true);
      try {
        const body = new FormData();
        body.append('username', 'emilys');
        body.append('password', 'emilyspass');
        const response = await doRequest<IUserDataReturn>(
          'auth/login',
          EApiMethods.POST,
          body
        );
        router.push('/');
        const { accessToken, ...data } = response;
        setUserData(data);
        localStorage.setItem('auth_token', accessToken);
      } catch (error) {
        setErrorMessage('Ошибка аутентификации');
      }
    }
    // if (userName?.length >= 4 && userPassword?.length >= 4) {
    //   setThrobberActive(true);
    //   try {
    //     const body = new FormData();
    //     body.append('username', 'emilys');
    //     body.append('password', 'emilyspass');
    //     const response = await doRequest<IUserDataReturn>(
    //       'auth/login',
    //       EApiMethods.POST,
    //       body
    //     );
    //     router.push('/');
    //     const { accessToken, ...data } = response;
    //     setUserData(data);
    //     localStorage.setItem('auth_token', accessToken);
    //   } catch (error) {
    //     setErrorMessage('Ошибка аутентификации');
    //   } finally {
    //     setThrobberActive(false);
    //   }
    // }
  };

  return { onSubmit };
};
