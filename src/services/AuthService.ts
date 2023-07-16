import { AxiosService } from './AxiosService';
import { ApiEndpoint } from '../types/ApiEndpoint';
import { ISignupRequestDto } from '@/types/ISignupRequestDto';

class AuthService extends AxiosService {
  baseUrl = 'https://fake-api-jwt-json-server.onrender.com/auth';

  public constructor() {
    super();
  }

  public signup(dto: ISignupRequestDto): Promise<any> {
    return this.post(`${this.baseUrl}${ApiEndpoint.SIGN_UP}`, dto).catch(
      error => {
        throw error;
      },
    );
  }
}

export const authService = new AuthService();
