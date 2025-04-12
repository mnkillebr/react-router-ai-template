import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { AuthJwtLoginAuthJwtLoginPostError, RegisterRegisterAuthRegisterPostError } from "~/openapi-client/types.gen";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getErrorMessage(
  error: RegisterRegisterAuthRegisterPostError | AuthJwtLoginAuthJwtLoginPostError,
): string {
  let errorMessage = "An unknown error occurred";

  if (typeof error.detail === "string") {
    // If detail is a string, use it directly
    errorMessage = error.detail;
  } else if (typeof error.detail === "object" && "reason" in error.detail) {
    // If detail is an object with a 'reason' key, use that
    errorMessage = error.detail["reason"] as string;
  }

  return errorMessage;
}