import { createCookieSessionStorage } from "react-router";
import { sessionCookie, themeCookie } from "./cookies.server";

const themeSessionStorage = createCookieSessionStorage({
  cookie: themeCookie,
});

const authSessionStorage = createCookieSessionStorage({
  cookie: sessionCookie,
});

export { authSessionStorage, themeSessionStorage };
