export const AUTH_TOKEN_NAME = 'auth_token';


export const setCookie = (key, value) => {
    document.cookie = `${key}=${value}`;
}
