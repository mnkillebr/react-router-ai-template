import { createCookie } from "react-router";

const { AUTH_COOKIE_SECRET, THEME_SESSION_SECRET, REGISTER_COOKIE_SECRET } = process.env;

if (typeof AUTH_COOKIE_SECRET !== "string") {
  throw new Error("Missing env: AUTH_COOKIE_SECRET")
}

if (typeof THEME_SESSION_SECRET !== "string") {
  throw new Error("Missing env: THEME_SESSION_SECRET")
}

if (typeof REGISTER_COOKIE_SECRET !== "string") {
  throw new Error("Missing env: REGISTER_COOKIE_SECRET")
}

export const sessionCookie = createCookie("rr_session", {
  secrets: [AUTH_COOKIE_SECRET],
  httpOnly: true,
  secure: true,
  maxAge: 60 * 60, // 1 hour
});

export const themeCookie = createCookie("rr_theme", {
  secure: true,
  httpOnly: true,
  sameSite: "lax",
  path: "/",
  secrets: [THEME_SESSION_SECRET || "s00p3rs3cr3t"],
  maxAge: 60 * 60 * 24 * 30, // 30 days
});

export const registerCookie = createCookie("rr_register", {
  secrets: [REGISTER_COOKIE_SECRET],
  sameSite: "strict",
  maxAge: 15, // 15 seconds
});
