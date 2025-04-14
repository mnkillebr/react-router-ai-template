import { usersCurrentUserUsersMeGet } from "~/openapi-client/sdk.gen";
import { authSessionStorage } from "~/sessions.server";
import { getErrorMessage } from "./utils";

export async function getAuthToken(request: Request) {
  const cookieHeader = request.headers.get("cookie")
  const authSession = await authSessionStorage.getSession(cookieHeader);
  const token = authSession.get("access_token")
  return token;
}

export async function getCurrentUser(token: string) {
  const { data: user, error } = await usersCurrentUserUsersMeGet({
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  if (error) {
    return { server_validation_error: getErrorMessage(error) };
  }
  return user;
}
