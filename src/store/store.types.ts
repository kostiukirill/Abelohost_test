/**
@interface IData
 @description Интерфейс для данных платежа.
 */
export class DataProduct {
  /**
  Наименование товара
   @type {string}
   */
  title = '';

  /**
  Id товара
   @type {number}
   */
  id = 0;

  /**
  Цена товара
   @type {number}
   */
  price = 0;

  /**
  Категория товара
   @type {string}
   */
  category = '';

  /**
 Изображение товара
   @type {string}
   */
  thumbnail = '';
}

/**
 Интерфейс `IUserData` представляет собой структуру данных пользователя,
 содержащую основные сведения, такие как адрес электронной почты, имя и фамилия.
 <i>
 </i> @interface IUserData
 @property {string} email - Адрес электронной почты пользователя.
 @property {string} firstName - Имя пользователя.
 @property {string} lastName - Фамилия пользователя.
 
 @example
 const user: IUserData = {
   email: 'user@example.com',
   firstName: 'John',
   lastName: 'Doe',
 };
 */
export interface IUserData {
  /**Адрес электронной почты пользователя. */
  email: string;
  /**Имя пользователя. */
  firstName: string;
  /**Фамилия пользователя. */
  lastName: string;
}

export type IDataProduct = DataProduct;

/**
@interface IAppState
 @description Интерфейс для состояния приложения.
 */
export interface IAppState {
  /**
  Флаг, указывающий, активен ли индикатор загрузки (throbber).
   @type {boolean}
   */
  isThrobberActive: boolean;

  /**
  Сообщение об ошибке, если таковое имеется.
   @type {string}
   */
  errorMessage: string;
  /**
  Сообщение об успехе, если таковое имеется.
   @type {string}
   */
  successMessage: string;
}

/**
@interface IStore
 @description Интерфейс для состояния хранилища данных приложения.
 */
export interface IStore {
  /**
  Данные платежа.
   @type {IData}
   */
  dataProducts: IDataProduct[];

  /**
  Состояние приложения.
   @type {IAppState}
   */
  appState: IAppState;

  /**Данные о пользователе
   * @type {IUserData}
   */
  userData?: IUserData;

  /**
  Установить данные платежа.
   @param {IData} data - Данные платежа.
   */
  setDataProducts: (data: IDataProduct[]) => void;

  /**
  Установить состояние индикатора загрузки (throbber).
   @param {boolean} isThrobberActive - Флаг активности индикатора загрузки.
   */
  setThrobberActive: (isThrobberActive: boolean) => void;

  /**
  Установить сообщение об ошибке.
   @param {string} message - Сообщение об ошибке.
   */
  setErrorMessage: (message: string) => void;

  /**
  Установить сообщение об успехе.
   @param {string} message - Сообщение об успехе.
   */
  setSuccessMessage: (message: string) => void;
  /**
  Установить данные о пользователе
   @param {IUserData} userdata - Данные о пользователе
   */
  setUserData: (userdata?: IUserData) => void;
}
