import { authSessionStorage } from "~/sessions.server";

export async function getAuthToken(request: Request) {
  const cookieHeader = request.headers.get("cookie")
  const authSession = await authSessionStorage.getSession(cookieHeader);
  const token = authSession.get("access_token")
  return token;
}
