import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password should be at least 8 characters.") // Minimum length validation
  .refine((password) => /[A-Z]/.test(password), {
    message: "Password should contain at least one uppercase letter.",
  }) // At least one uppercase letter
  .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
    message: "Password should contain at least one special character.",
  });


export type loginActionType = {
  email?: string;
  username?: string;
  password?: string;
  server_validation_error?: string;
  errors?: {
    [key: string]: string;
  };
}

export const magicLinkSchema = z.object({
  email: z.coerce.string().email({ message: "Invalid email address" }),
});

export const loginSchema = z.object({
  password: z.string().min(1, { message: "Password is required" }),
  username: z.string().min(1, { message: "Username is required" }),
});

export type registerActionType = {
  full_name?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
  server_validation_error?: string;
  errors?: {
    [key: string]: string;
  };
}

export const registerSchema = z
  .object({
    full_name: z.string().min(1, { message: "Full name is required" }),
    password: passwordSchema,
    confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
    email: z.string().email({ message: "Invalid email address" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

  export type registerMagicLinkActionType = {
    full_name?: string;
    server_validation_error?: string;
    errors?: {
      [key: string]: string;
    };
  }

  export const registerMagicLinkSchema = z.object({
    full_name: z.string().min(1, { message: "Full name is required" }),
  });
