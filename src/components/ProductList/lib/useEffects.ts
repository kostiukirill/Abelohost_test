import { useEffect } from 'react';
import { doRequest, EApiMethods } from '@services';
import { DataProduct, IDataProduct } from '@store';
import type { IUseProductListProps } from '../types';

/**
  Хук `useEffects` управляет эффектами, связанными с загрузкой данных о продуктах из API.
  Он выполняет HTTP-запрос для получения списка продуктов и обновляет состояние магазина.
  
  @param {IUseProductListProps} props - Свойства, содержащие состояние магазина.
  @param {IStore} props.store - Объект состояния магазина, который позволяет управлять данными о продуктах.
  @param {Function} props.store.setDataProducts - Функция для обновления списка продуктов в состоянии магазина.
  @param {Function} props.store.setThrobberActive - Функция для управления состоянием индикатора загрузки.
  
  @example
  const store = useStore();
  useEffects({ store });
 
 */
export const useEffects = (props: IUseProductListProps) => {
  const { store } = props;
  const { setDataProducts, setThrobberActive, setErrorMessage } = store;

  useEffect(() => {
    setThrobberActive(true);
    if (setDataProducts) {
      const keysOfData = Object.keys(new DataProduct());
      doRequest<{ products: IDataProduct[] }>(
        `products?limit=${12}&select=${keysOfData.join(',')}`,
        EApiMethods.GET
      )
        .then((res) => {
          setDataProducts(res.products);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        })
        .finally(() => setThrobberActive(false));
    }
  }, [setDataProducts, setErrorMessage, setThrobberActive]);
};
