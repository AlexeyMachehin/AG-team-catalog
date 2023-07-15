import { AxiosService } from './AxiosService';
import { ISignupRequestDto } from '../types/api/ISignupRequestDto';
import { ApiEndpoint } from '../types/api/ApiEndpoint';

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
