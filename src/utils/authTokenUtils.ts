class AuthTokenUtils {
  private readonly TOKEN_KEY = 'token';

  public getToken(): string | null {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith(this.TOKEN_KEY))
      ?.split('=')[1];
    return token || null;
  }

  public setToken(token: string): void {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 5);

    document.cookie = `${
      this.TOKEN_KEY
    }=${token}; expires=${expirationDate.toUTCString()}; path=/;`;
  }

  public removeToken(): void {
    document.cookie = `${this.TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }
}

export const authTokenUtils = new AuthTokenUtils();
