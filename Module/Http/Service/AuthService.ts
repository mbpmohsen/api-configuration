class AuthService {
    static setAccessToken = (token: string) => sessionStorage.setItem('accessToken', token);

    static clearAccessToken = () => sessionStorage.removeItem('accessToken');

    static getAccessToken = () => sessionStorage.getItem('accessToken');

    static setRefreshToken = (token: string) => sessionStorage.setItem('refreshToken', token);

    static clearRefreshToken = () => sessionStorage.removeItem('refreshToken');

    static getRefreshToken = () => sessionStorage.getItem('refreshToken');
}

export default AuthService;
