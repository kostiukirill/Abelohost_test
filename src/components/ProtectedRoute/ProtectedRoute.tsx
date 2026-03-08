'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Throbber } from '@components';
import { IUserData, useStore } from '@store';
import { doRequest, EApiMethods } from '@services';

/**
 * ВНИМАНИЕ, ProtectedRoute в данной реализации играет только роль обновления данных о пользователе при релоаде страницы
 * 
 Компонент `ProtectedRoute` является оберткой для защищенных маршрутов,
 которая проверяет наличие токена аутентификации. Если токен отсутствует,
 пользователь перенаправляется на страницу авторизации.
 
 @param {Object} props - Свойства компонента.
 @param {React.ReactNode} props.children - Дочерние элементы, которые будут отрисованы,
 если токен аутентификации присутствует.
 
 @returns {JSX.Element} Элемент, содержащий дочерние элементы или индикатор загрузки.
 
 @example
 <ProtectedRoute>
   <YourProtectedComponent />
 </ProtectedRoute>
 */
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { userData, setUserData } = useStore();

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!userData && token) {
      doRequest<IUserData>('auth/me', EApiMethods.GET)
        .then((res) => {
          setUserData(res as IUserData);
        })
        /**ЛОГИКА ЗАЩИТЫ МАРШРУТОВ можно подключить при желании */
        // .catch(() => {
        //   localStorage.removeItem('auth_token');
        //   router.push('/auth');
        // })
        .finally(() => setLoading(false));
    } else if (!token) {
      /**ЛОГИКА ЗАЩИТЫ МАРШРУТОВ можно подключить при желании */
      // router.push('/auth');
      setLoading(false);
    }
  }, [setUserData, userData]);

  if (loading) {
    return <Throbber />;
  }

  return <>{children}</>;
};
