import { create } from 'zustand';
import type { IStore } from './store.types';

/**
 Хук `useStore` создает глобальное состояние приложения с использованием Zustand.
 Хранилище управляет данными о продуктах и состоянием приложения, включая управление сообщениями об ошибках и успехах.
 
 @typedef {Object} IStore
 @property {IDataProduct[]} dataProducts - Массив данных о продуктах.
 @property {Object} appState - Состояние приложения.
 @property {boolean} appState.isThrobberActive - Флаг, указывающий, активен ли индикатор загрузки.
 @property {string} appState.errorMessage - Сообщение об ошибке.
 @property {string} appState.successMessage - Сообщение об успешном выполнении операции.
 @property {Function} setDataProducts - Функция для обновления списка продуктов.
 @property {Function} setThrobberActive - Функция для включения/выключения индикатора загрузки.
 @property {Function} setErrorMessage - Функция для установки сообщения об ошибке.
 @property {Function} setSuccessMessage - Функция для установки сообщения об успешном выполнении операции.
 
 @returns {IStore} Хранилище состояния приложения.
 
 @example
 const store = useStore();
 store.setDataProducts(newProducts);
 store.setThrobberActive(true);
 store.setErrorMessage('An error occurred');
 store.setSuccessMessage('Operation successful');
 */
export const useStore = create<IStore>((set) => ({
  userData: undefined,
  dataProducts: [],
  appState: {
    isThrobberActive: false,
    errorMessage: '',
    successMessage: '',
  },
  setDataProducts: (dataProducts) =>
    set((state) => ({
      ...state,
      dataProducts,
    })),
  setThrobberActive: (isThrobberActive) =>
    set((state) => ({
      ...state,
      appState: {
        ...state.appState,
        isThrobberActive,
      },
    })),
  setErrorMessage: (errorMessage) =>
    set((state) => ({
      ...state,
      appState: {
        ...state.appState,
        errorMessage,
      },
    })),
  setSuccessMessage: (successMessage) =>
    set((state) => ({
      ...state,
      appState: {
        ...state.appState,
        successMessage,
      },
    })),
  setUserData: (userData) => {
    set((state) => ({
      ...state,
      userData,
    }));
  },
}));
