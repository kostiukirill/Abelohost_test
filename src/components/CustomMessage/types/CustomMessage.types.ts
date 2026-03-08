import type { IStore } from '@store';

/**
  Интерфейс для свойств, передаваемых в хук `useCustomMessage`.
  
  @interface IUseCustomMessageProps
*/
export interface IUseCustomMessageProps {
  /** 
    Хранилище, соответствующее интерфейсу `IStore`. 
    Используется для доступа к состоянию и методам хранилища.
   */
  store: IStore;
}

/**
  Интерфейс для свойств, передаваемых в компонент `CustomMessage`.
  
  @interface ICustomMessageProps
*/
export interface ICustomMessageProps {
  /** Заголовок сообщения, который будет отображаться в уведомлении. */
  title: ETitleMessage;

  /** Текст сообщения, который будет отображаться в уведомлении. */
  message: string;

  /** Функция обратного вызова, вызываемая при нажатии кнопки "OK". */
  onOk: () => void;
}

/**
  Перечисление для заголовков сообщений.
  
  @enum {string}
*/
export enum ETitleMessage {
  /** Заголовок для сообщений об ошибках. */
  ERROR = 'ERROR 😖',

  /** Заголовок для сообщений об успешных действиях. */
  SUCCESS = 'SUCCESS ☺️',
}
