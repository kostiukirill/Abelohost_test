import { ETypeField } from '@components';
import type { IStore, IUserData } from '@store';

/**
 Интерфейс состояния аутентификации.
 */
export interface IUseAuthState {
  /** Имя пользователя для аутентификации. */
  userName: string;

  /** Пароль пользователя для аутентификации. */
  userPassword: string;

  /** Флаг, указывающий, отключена ли кнопка Login. */
  isDisabled: boolean;

  /** Функция для обновления имени пользователя. */
  setUserName: React.Dispatch<React.SetStateAction<string>>;

  /** Функция для обновления пароля пользователя. */
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;

  /** Функция для изменения состояния флага isDisabled. */
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;

  /**Данные для отображения полей */
  fieldData: IFieldData[];

  /**Функция изменения данных полей */
  setFieldData: React.Dispatch<React.SetStateAction<IFieldData[]>>;
}

/**
 Интерфейс свойств, передаваемых в хук аутентификации.
 */
export interface IUseAuthProps {
  /** Состояние аутентификации. */
  state: IUseAuthState;

  /** Доступ к глобальному состоянию приложения. */
  store: IStore;
}
/**
 Интерфейс, описывающий данные поля формы аутентификации.
 */
export interface IFieldData {
  /** Тип поля (текстовое или пароль). */
  type: ETypeField;

  /** Текущее значение поля. */
  value: string;

  /** Метка, отображаемая рядом с полем. */
  label: string;

  /** Уникальный идентификатор для поля. */
  id: string;

  /** Сообщение об некорректном заполнении поля */
  errorValidateMessage?: string;

  /** Обработчик события изменения значения поля. */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 Интерфейс, описывающий возвращаемое значение из хука, отвечающего за данные формы аутентификации.
 */
export interface IUseAuthFormDataReturns {
  /** Массив данных полей формы аутентификации. */
  fieldData: IFieldData[];
}

/**
 Интерфейс, описывающий возвращаемое значение из хука, отвечающего за методы аутентификации.
 */
export interface IUseAuthFormMethodsReturns {
  /**
   Функция для обработки отправки формы аутентификации.
    
   @returns {Promise<void>} - Промис, завершающийся без значения, после выполнения обработки.
   */
  onSubmit: () => Promise<void>;
}

export interface IUserDataReturn extends IUserData {
  accessToken: string;
}
