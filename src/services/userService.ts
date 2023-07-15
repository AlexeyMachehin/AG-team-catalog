import { IUser } from '@/types/user';
import { AxiosService } from './AxiosService';

class UserService extends AxiosService {
  baseUrl = '/users';

  public constructor() {
    super();
  }

  public async getUsers<T>() {
    const response = await this.get<any>(this.baseUrl);
    return response;
  }

  public async getUser(id: string): Promise<IUser> {
    const response = await this.get<{ data: IUser }>(`${this.baseUrl}/${id}`, {
      params: { id },
    });
    return response.data.data;
  }
}

export const userService = new UserService();
