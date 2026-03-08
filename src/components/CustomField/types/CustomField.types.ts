/**
 Перечисление типов полей, которые могут использоваться в форме.
 @enum {string}
 */
export enum ETypeField {
  /** Поле для ввода чисел. */
  number = 'number',
  /** Поле для ввода текста. */
  text = 'text',
  /** Поле для выбора (чекбокс). */
  checkbox = 'checkbox',
  /** Поле для ввода пароля. */
  password = 'password',
}

/**
 Тип значения, который зависит от типа поля.
 @template T - Тип поля, который должен быть одним из ETypeField.
 @returns {number | string | boolean} Значение, соответствующее типу поля.
 */
export type TValue<T extends ETypeField> = T extends ETypeField.number
  ? number
  : T extends ETypeField.text
    ? string
    : T extends ETypeField.password
      ? string
      : T extends ETypeField.checkbox
        ? boolean
        : never;

/**
 Интерфейс для описания пользовательского поля.
 @template T - Тип поля, который должен быть одним из ETypeField.
 @interface ICustomField
 @property {T} type - Тип поля.
 @property {TValue<T>} value - Значение поля, зависящее от типа.
 @property {string} label - Метка поля.
 @property {string} id - Уникальный идентификатор поля.
 @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Обработчик изменения значения поля.
 */
export interface ICustomField<T extends ETypeField> {
  type: T;
  value: TValue<T>;
  label: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorValidateMessage?: string;
}

/**
 Интерфейс для описания свойств поля.
 @template T - Тип поля, который должен быть одним из ETypeField.
 @interface IFieldProps
 @property {ICustomField<T>} field - Поле, которое будет отображаться.
 */
export interface IFieldProps<T extends ETypeField> {
  field: ICustomField<T>;
}
