import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const apiAxiosInstance = Axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Referrer-Policy': 'no-referrer',
  },
});

export abstract class AxiosService {
  private readonly axios: AxiosInstance = apiAxiosInstance;

  protected constructor() {
    this.axios.interceptors.response.use(undefined, error => {
      if(error.response?.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message);
    });
  }

  public async get<T>(
    url: string,
    payload?: AxiosRequestConfig,
  ): Promise<{ data: T }> {
    const response = await this.axios.get<T>(url, payload);

    return {
      data: response.data,
    };
  }

  public async post<Request, Payload>(
    url: string,
    payload?: Request,
  ): Promise<Payload> {
    return this.axios.post(url, payload);
  }

  public async put<Request, Payload>(
    url: string,
    payload?: Request,
  ): Promise<Payload> {
    return this.axios.put(url, payload);
  }

  public async delete<T>(url: string) {
    await this.axios.delete<T>(url);
  }
}
