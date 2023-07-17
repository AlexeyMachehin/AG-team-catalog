import { IUser } from '@/types/user';
import { AxiosService } from './AxiosService';
import { IUsersResponse } from '@/store/thunk/usersThunk';

class UserService extends AxiosService {
  baseUrl = '/users';

  public constructor() {
    super();
  }

  public async getUsers(page?: number): Promise<IUsersResponse> {
    const params = { page, per_page: 8 };
    const response = await this.get<IUsersResponse>(this.baseUrl, { params });
    return response.data;
  }

  public async getUser(id: string): Promise<IUser> {
    const response = await this.get<{ data: IUser }>(`${this.baseUrl}/${id}`, {
      params: { id },
    });
    return response.data.data;
  }
}

export const userService = new UserService();
