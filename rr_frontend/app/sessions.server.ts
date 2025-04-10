import { createCookieSessionStorage } from "react-router";

const themeSessionStorage = createCookieSessionStorage({
  cookie: {
    name: "rr_theme",
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secrets: [process.env.THEME_SESSION_SECRET || "s00p3rs3cr3t"],
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
});

export { themeSessionStorage };
