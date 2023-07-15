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

  public async createUser(userData: any) {
    await this.post(this.baseUrl, userData);
  }

  public async deleteUser(id: string) {
    await this.delete<{ id: string }>(`${this.baseUrl}/${id}`);
  }

  public async updateUser(id: string, userData: any) {
    await this.put(`${this.baseUrl}/${id}`, userData);
  }
}

export const userService = new UserService();
