// This file is auto-generated by @hey-api/openapi-ts

import { type Options as ClientOptions, type TDataShape, type Client, urlSearchParamsBodySerializer } from '@hey-api/client-fetch';
import type { MakeHandlerCopilotkitPathGetData, AuthJwtLoginAuthJwtLoginPostData, AuthJwtLoginAuthJwtLoginPostResponse, AuthJwtLoginAuthJwtLoginPostError, AuthJwtLogoutAuthJwtLogoutPostData, RegisterRegisterAuthRegisterPostData, RegisterRegisterAuthRegisterPostResponse, RegisterRegisterAuthRegisterPostError, ResetForgotPasswordAuthForgotPasswordPostData, ResetForgotPasswordAuthForgotPasswordPostError, ResetResetPasswordAuthResetPasswordPostData, ResetResetPasswordAuthResetPasswordPostError, VerifyRequestTokenAuthRequestVerifyTokenPostData, VerifyRequestTokenAuthRequestVerifyTokenPostError, VerifyVerifyAuthVerifyPostData, VerifyVerifyAuthVerifyPostResponse, VerifyVerifyAuthVerifyPostError, UsersCurrentUserUsersMeGetData, UsersCurrentUserUsersMeGetResponse, UsersPatchCurrentUserUsersMePatchData, UsersPatchCurrentUserUsersMePatchResponse, UsersPatchCurrentUserUsersMePatchError, UsersDeleteUserUsersIdDeleteData, UsersDeleteUserUsersIdDeleteResponse, UsersDeleteUserUsersIdDeleteError, UsersUserUsersIdGetData, UsersUserUsersIdGetResponse, UsersUserUsersIdGetError, UsersPatchUserUsersIdPatchData, UsersPatchUserUsersIdPatchResponse, UsersPatchUserUsersIdPatchError, AuthenticatedRouteAuthenticatedRouteGetData, ReadUserByEmailUsersEmailEmailGetData, ReadUserByEmailUsersEmailEmailGetResponse, ReadUserByEmailUsersEmailEmailGetError, RootGetData } from './types.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};

/**
 * Make Handler
 */
export const makeHandlerCopilotkitPathDelete = <ThrowOnError extends boolean = false>(options?: Options<MakeHandlerCopilotkitPathGetData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/copilotkit/{path}',
        ...options
    });
};

/**
 * Make Handler
 */
export const makeHandlerCopilotkitPathGet = <ThrowOnError extends boolean = false>(options?: Options<MakeHandlerCopilotkitPathGetData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/copilotkit/{path}',
        ...options
    });
};

/**
 * Make Handler
 */
export const makeHandlerCopilotkitPathOptions = <ThrowOnError extends boolean = false>(options?: Options<MakeHandlerCopilotkitPathGetData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).options<unknown, unknown, ThrowOnError>({
        url: '/copilotkit/{path}',
        ...options
    });
};

/**
 * Make Handler
 */
export const makeHandlerCopilotkitPathPost = <ThrowOnError extends boolean = false>(options?: Options<MakeHandlerCopilotkitPathGetData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/copilotkit/{path}',
        ...options
    });
};

/**
 * Make Handler
 */
export const makeHandlerCopilotkitPathPut = <ThrowOnError extends boolean = false>(options?: Options<MakeHandlerCopilotkitPathGetData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
        url: '/copilotkit/{path}',
        ...options
    });
};

/**
 * Auth:Jwt.Login
 */
export const authJwtLoginAuthJwtLoginPost = <ThrowOnError extends boolean = false>(options: Options<AuthJwtLoginAuthJwtLoginPostData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<AuthJwtLoginAuthJwtLoginPostResponse, AuthJwtLoginAuthJwtLoginPostError, ThrowOnError>({
        ...urlSearchParamsBodySerializer,
        url: '/auth/jwt/login',
        ...options,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...options?.headers
        }
    });
};

/**
 * Auth:Jwt.Logout
 */
export const authJwtLogoutAuthJwtLogoutPost = <ThrowOnError extends boolean = false>(options?: Options<AuthJwtLogoutAuthJwtLogoutPostData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/auth/jwt/logout',
        ...options
    });
};

/**
 * Register:Register
 */
export const registerRegisterAuthRegisterPost = <ThrowOnError extends boolean = false>(options: Options<RegisterRegisterAuthRegisterPostData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<RegisterRegisterAuthRegisterPostResponse, RegisterRegisterAuthRegisterPostError, ThrowOnError>({
        url: '/auth/register',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

/**
 * Reset:Forgot Password
 */
export const resetForgotPasswordAuthForgotPasswordPost = <ThrowOnError extends boolean = false>(options: Options<ResetForgotPasswordAuthForgotPasswordPostData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, ResetForgotPasswordAuthForgotPasswordPostError, ThrowOnError>({
        url: '/auth/forgot-password',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

/**
 * Reset:Reset Password
 */
export const resetResetPasswordAuthResetPasswordPost = <ThrowOnError extends boolean = false>(options: Options<ResetResetPasswordAuthResetPasswordPostData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, ResetResetPasswordAuthResetPasswordPostError, ThrowOnError>({
        url: '/auth/reset-password',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

/**
 * Verify:Request-Token
 */
export const verifyRequestTokenAuthRequestVerifyTokenPost = <ThrowOnError extends boolean = false>(options: Options<VerifyRequestTokenAuthRequestVerifyTokenPostData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, VerifyRequestTokenAuthRequestVerifyTokenPostError, ThrowOnError>({
        url: '/auth/request-verify-token',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

/**
 * Verify:Verify
 */
export const verifyVerifyAuthVerifyPost = <ThrowOnError extends boolean = false>(options: Options<VerifyVerifyAuthVerifyPostData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<VerifyVerifyAuthVerifyPostResponse, VerifyVerifyAuthVerifyPostError, ThrowOnError>({
        url: '/auth/verify',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

/**
 * Users:Current User
 */
export const usersCurrentUserUsersMeGet = <ThrowOnError extends boolean = false>(options?: Options<UsersCurrentUserUsersMeGetData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<UsersCurrentUserUsersMeGetResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/users/me',
        ...options
    });
};

/**
 * Users:Patch Current User
 */
export const usersPatchCurrentUserUsersMePatch = <ThrowOnError extends boolean = false>(options: Options<UsersPatchCurrentUserUsersMePatchData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<UsersPatchCurrentUserUsersMePatchResponse, UsersPatchCurrentUserUsersMePatchError, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/users/me',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

/**
 * Users:Delete User
 */
export const usersDeleteUserUsersIdDelete = <ThrowOnError extends boolean = false>(options: Options<UsersDeleteUserUsersIdDeleteData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<UsersDeleteUserUsersIdDeleteResponse, UsersDeleteUserUsersIdDeleteError, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/users/{id}',
        ...options
    });
};

/**
 * Users:User
 */
export const usersUserUsersIdGet = <ThrowOnError extends boolean = false>(options: Options<UsersUserUsersIdGetData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<UsersUserUsersIdGetResponse, UsersUserUsersIdGetError, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/users/{id}',
        ...options
    });
};

/**
 * Users:Patch User
 */
export const usersPatchUserUsersIdPatch = <ThrowOnError extends boolean = false>(options: Options<UsersPatchUserUsersIdPatchData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<UsersPatchUserUsersIdPatchResponse, UsersPatchUserUsersIdPatchError, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/users/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

/**
 * Authenticated Route
 */
export const authenticatedRouteAuthenticatedRouteGet = <ThrowOnError extends boolean = false>(options?: Options<AuthenticatedRouteAuthenticatedRouteGetData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/authenticated-route',
        ...options
    });
};

/**
 * Read User By Email
 */
export const readUserByEmailUsersEmailEmailGet = <ThrowOnError extends boolean = false>(options: Options<ReadUserByEmailUsersEmailEmailGetData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<ReadUserByEmailUsersEmailEmailGetResponse, ReadUserByEmailUsersEmailEmailGetError, ThrowOnError>({
        url: '/users/email/{email}',
        ...options
    });
};

/**
 * Root
 */
export const rootGet = <ThrowOnError extends boolean = false>(options?: Options<RootGetData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/',
        ...options
    });
};