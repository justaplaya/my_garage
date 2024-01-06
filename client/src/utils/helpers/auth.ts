export const getCookie = (name: string) => {
  const _name = name + '=';
  const cookiesArr = document.cookie.split(';');

  for (let i = 0; i < cookiesArr.length; i++) {
    let cookie = cookiesArr[i];
    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(_name) === 0) return cookie.substring(_name.length, cookie.length);
  }

  return null;
};

export const deleteCookie = (name: string) => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export const isAuthorized = (): boolean => !!getCookie('token');
