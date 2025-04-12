import { createCookieSessionStorage } from "react-router";
import { sessionCookie, themeCookie, registerCookie } from "./cookies.server";

const themeSessionStorage = createCookieSessionStorage({
  cookie: themeCookie,
});

const authSessionStorage = createCookieSessionStorage({
  cookie: sessionCookie,
});

const registerSessionStorage = createCookieSessionStorage({
  cookie: registerCookie,
});

export { authSessionStorage, themeSessionStorage, registerSessionStorage };
