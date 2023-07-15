import { AxiosService} from './AxiosService';
import { ISignupRequestDto } from '../types/api/ISignupRequestDto';
import { ILoginRequestDto } from '../types/api/ILoginRequestDto';
import { ApiEndpoint } from '../types/api/ApiEndpoint';
import { UserDto } from '../store/user/userDto';

class AuthService extends AxiosService {
  public constructor() {
    super();
  }

  public async login(dto: ILoginRequestDto) {
    return this.post(ApiEndpoint.SIGN_IN, dto).catch(error => {
      if (error.response?.status === 400) {
        throw error.response.data.reason;
      }
    });
  }

  public signup(dto: ISignupRequestDto): Promise<any> {
    return this.post(ApiEndpoint.SIGN_UP, dto).catch(error => {
      throw error;
    });
  }

  public logout(): Promise<any> {
    return this.post(ApiEndpoint.LOGOUT);
  }

  public getUser(): Promise<UserDto> {
    return this.get<UserDto>(ApiEndpoint.GET_USER);
  }
}

export const authService = new AuthService();
