/**
 * Интерфейс описывает структуру данных ссылок.
 *
 * @typedef {Object} ILinkData
 * @property {string} id Уникальный идентификатор ссылки.
 * @property {string} title Название или заголовок ссылки.
 * @property {string} url Адрес веб-ресурса.
 */
export interface ILinkData {
  /**Уникальный идентификатор ссылки. */
  id: string;
  /** Название или заголовок ссылки.*/
  title: string;
  /**  Адрес веб-ресурса.*/
  url: string;
}

/**
 * Интерфейс для данных которые возвращает хук useData.
 *
 * @typedef {Object} IUseDataReturns
 * @property {Array.<ILinkData>} linksData Массив структурированных данных ссылок.
 */
export interface IUseDataReturns {
  /**Массив структурированных данных ссылок */
  linksData: ILinkData[];
}
