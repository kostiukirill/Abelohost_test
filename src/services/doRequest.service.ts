import axios from 'axios';
import type { RawAxiosRequestHeaders, AxiosResponse } from 'axios';
import type { EApiMethods } from './types';

/**
  Создает экземпляр Axios с настройками по умолчанию.
  @type {AxiosInstance}
 */
const axiosApiInstance = axios.create();

/**
  Перехватчик запросов для настройки конфигурации перед отправкой.
  @param {AxiosRequestConfig} config - Конфигурация запроса.
  @returns {AxiosRequestConfig} Обновленная конфигурация запроса.
 */
axiosApiInstance.interceptors.request.use(
  (config) => {
    const webUrl = 'https://dummyjson.com/';
    config.baseURL = webUrl;
    const token =
      sessionStorage.getItem('auth_token') ??
      localStorage.getItem('auth_token');
    config.headers['Authorization'] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
  Выполняет HTTP-запрос с использованием Axios.
  
  @template T
  @param {string} url - URL для запроса.
  @param {EApiMethods} method - Метод API (GET, POST и т.д.).
  @param {RawAxiosRequestHeaders} [headers] - Дополнительные заголовки для запроса.
  @param {string | FormData} [data] - Данные для отправки в теле запроса.
  @param {(r: AxiosResponse) => T} [okCallback] - Функция обратного вызова для обработки успешного ответа.
  @returns {Promise<T>} - Промис с данными ответа.
 */
const customFetch = async <T = unknown>(
  url: string,
  method: EApiMethods,
  headers?: RawAxiosRequestHeaders,
  data?: string | FormData,
  okCallback?: (r: AxiosResponse) => T
): Promise<T> => {
  try {
    const response = await axiosApiInstance.request({
      url,
      method,
      headers,
      data,
    });

    if (okCallback) {
      return okCallback(response.data);
    } else {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

/**
  Выполняет HTTP-запрос и возвращает данные ответа.
 
  @template T
  @param {string} url - URL для запроса.
  @param {EApiMethods} method - Метод API (GET, POST и т.д.).
  @param {string | FormData} [body] - Данные для отправки в теле запроса.
  @param {(r: AxiosResponse) => T} [okCallback] - Функция обратного вызова для обработки успешного ответа.
  @returns {Promise<T>} - Промис с данными ответа.
 */
export const doRequest = async <T = unknown>(
  url: string,
  method: EApiMethods,
  body?: string | FormData,
  okCallback?: (r: AxiosResponse) => T
): Promise<T> => {
  return customFetch<T>(
    url,
    method,
    {
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json',
      'Cache-control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
      dataType: 'json',
    },
    body,
    okCallback
  );
};
