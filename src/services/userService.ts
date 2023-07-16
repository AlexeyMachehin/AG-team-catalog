import { IUser } from '@/types/user';
import { AxiosService } from './AxiosService';

class UserService extends AxiosService {
  baseUrl = '/users';

  public constructor() {
    super();
  }

  public async getUsers<T>(page?: number) {
    const params = { page, per_page: 8 };
    const response = await this.get<any>(this.baseUrl, { params });
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
