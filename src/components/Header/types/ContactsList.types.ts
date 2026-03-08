/**
Перечисление `EContactAction` определяет доступные действия для контактов.*
@enum {string}*/
export enum EContactAction {
  /** Действие для отправки электронной почты */
  mail = 'mailto:',

  /** Действие для совершения телефонного звонка */
  phone = 'tel:',

  /** Действие для поиска адреса в Google Maps */
  address = 'https://www.google.com/maps/search/?api=1&query=',
}

/**
Перечисление `EContactType` определяет типы контактов.*
@enum {string}*/
export enum EContactType {
  /** Тип для электронной почты */
  mail = 'mail',

  /** Тип для телефонного номера */
  phone = 'phone',

  /** Тип для адреса */
  address = 'address',
}

/**
Тип `ContactMapping` сопоставляет действия контактов с соответствующими типами.
@typedef {Object} ContactMapping* @property {EContactType.mail} mail - Тип для действия электронной почты.
@property {EContactType.phone} phone - Тип для действия телефонного звонка. @property {EContactType.address} address - Тип для действия поиска адреса.
 */
type ContactMapping = {
  [EContactAction.mail]: EContactType.mail;
  [EContactAction.phone]: EContactType.phone;
  [EContactAction.address]: EContactType.address;
};

/**
Интерфейс `IContactData` описывает данные о контакте.*
@interface IContactData* @template T - Тип действия контакта, наследуемый от `EContactAction`.
@property {T} action - Действие, связанное с контактом.* @property {string} value - Значение контакта (например, адрес электронной почты, номер телефона).
@property {string} title - Заголовок или название контакта.* @property {ContactMapping[T]} type - Тип контакта, основанный на действии.
 */
export interface IContactData<T extends EContactAction> {
  /** Действие при клике на ссылку*/
  action: T;
  /** Значение ссылки*/
  value: string;
  /** Заголовок*/
  title: string;
  /**Тип ссылки */
  type: ContactMapping[T];
}

/**
Интерфейс `IUseContactsListDataReturns` описывает возвращаемые данные списка контактов.*
@interface IUseContactsListDataReturns* @property {IContactData<EContactAction>[]} contactsData - Массив данных о контактах.
 */
export interface IUseContactsListDataReturns {
  contactsData: IContactData<EContactAction>[];
}
