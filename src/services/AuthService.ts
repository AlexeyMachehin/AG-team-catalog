import { AxiosService } from './AxiosService';
import { ApiEndpoint } from '../consts/ApiEndpoint';
import { ISignupRequestDto } from '@/types/ISignupRequestDto';

class AuthService extends AxiosService {
  baseUrl = process.env.REGISTRATION_SERVER_PATH;

  public constructor() {
    super();
  }

  public signup(dto: ISignupRequestDto): Promise<string> {
    return this.post<ISignupRequestDto, { access_token: string }>(
      `${this.baseUrl}${ApiEndpoint.SIGN_UP}`,
      dto,
    )
      .then(data => data.access_token)
      .catch(error => {
        throw error;
      });
  }
}

export const authService = new AuthService();
