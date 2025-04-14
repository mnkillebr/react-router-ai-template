// This file is auto-generated by @hey-api/openapi-ts

export type BearerResponse = {
    access_token: string;
    token_type: string;
};

export type BodyAuthJwtLoginAuthJwtLoginPost = {
    grant_type?: string | null;
    username: string;
    password: string;
    scope?: string;
    client_id?: string | null;
    client_secret?: string | null;
};

export type BodyResetForgotPasswordAuthForgotPasswordPost = {
    email: string;
};

export type BodyResetResetPasswordAuthResetPasswordPost = {
    token: string;
    password: string;
};

export type BodyVerifyRequestTokenAuthRequestVerifyTokenPost = {
    email: string;
};

export type BodyVerifyVerifyAuthVerifyPost = {
    token: string;
};

export type ErrorModel = {
    detail: string | {
        [key: string]: string;
    };
};

export type HttpValidationError = {
    detail?: Array<ValidationError>;
};

export type UserCreate = {
    email: string;
    password: string;
    is_active?: boolean | null;
    is_superuser?: boolean | null;
    is_verified?: boolean | null;
    full_name: string;
};

export type UserRead = {
    id: string;
    email: string;
    is_active?: boolean;
    is_superuser?: boolean;
    is_verified?: boolean;
    full_name: string;
};

export type UserUpdate = {
    password?: string | null;
    email?: string | null;
    is_active?: boolean | null;
    is_superuser?: boolean | null;
    is_verified?: boolean | null;
    full_name?: string | null;
};

export type ValidationError = {
    loc: Array<string | number>;
    msg: string;
    type: string;
};

export type MakeHandlerCopilotkitPathDeleteData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/copilotkit/{path}';
};

export type MakeHandlerCopilotkitPathDeleteResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type MakeHandlerCopilotkitPathGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/copilotkit/{path}';
};

export type MakeHandlerCopilotkitPathGetResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type MakeHandlerCopilotkitPathOptionsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/copilotkit/{path}';
};

export type MakeHandlerCopilotkitPathOptionsResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type MakeHandlerCopilotkitPathPostData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/copilotkit/{path}';
};

export type MakeHandlerCopilotkitPathPostResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type MakeHandlerCopilotkitPathPutData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/copilotkit/{path}';
};

export type MakeHandlerCopilotkitPathPutResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type AuthJwtLoginAuthJwtLoginPostData = {
    body: BodyAuthJwtLoginAuthJwtLoginPost;
    path?: never;
    query?: never;
    url: '/auth/jwt/login';
};

export type AuthJwtLoginAuthJwtLoginPostErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type AuthJwtLoginAuthJwtLoginPostError = AuthJwtLoginAuthJwtLoginPostErrors[keyof AuthJwtLoginAuthJwtLoginPostErrors];

export type AuthJwtLoginAuthJwtLoginPostResponses = {
    /**
     * Successful Response
     */
    200: BearerResponse;
};

export type AuthJwtLoginAuthJwtLoginPostResponse = AuthJwtLoginAuthJwtLoginPostResponses[keyof AuthJwtLoginAuthJwtLoginPostResponses];

export type AuthJwtLogoutAuthJwtLogoutPostData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/auth/jwt/logout';
};

export type AuthJwtLogoutAuthJwtLogoutPostErrors = {
    /**
     * Missing token or inactive user.
     */
    401: unknown;
};

export type AuthJwtLogoutAuthJwtLogoutPostResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type RegisterRegisterAuthRegisterPostData = {
    body: UserCreate;
    path?: never;
    query?: never;
    url: '/auth/register';
};

export type RegisterRegisterAuthRegisterPostErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type RegisterRegisterAuthRegisterPostError = RegisterRegisterAuthRegisterPostErrors[keyof RegisterRegisterAuthRegisterPostErrors];

export type RegisterRegisterAuthRegisterPostResponses = {
    /**
     * Successful Response
     */
    201: UserRead;
};

export type RegisterRegisterAuthRegisterPostResponse = RegisterRegisterAuthRegisterPostResponses[keyof RegisterRegisterAuthRegisterPostResponses];

export type ResetForgotPasswordAuthForgotPasswordPostData = {
    body: BodyResetForgotPasswordAuthForgotPasswordPost;
    path?: never;
    query?: never;
    url: '/auth/forgot-password';
};

export type ResetForgotPasswordAuthForgotPasswordPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type ResetForgotPasswordAuthForgotPasswordPostError = ResetForgotPasswordAuthForgotPasswordPostErrors[keyof ResetForgotPasswordAuthForgotPasswordPostErrors];

export type ResetForgotPasswordAuthForgotPasswordPostResponses = {
    /**
     * Successful Response
     */
    202: unknown;
};

export type ResetResetPasswordAuthResetPasswordPostData = {
    body: BodyResetResetPasswordAuthResetPasswordPost;
    path?: never;
    query?: never;
    url: '/auth/reset-password';
};

export type ResetResetPasswordAuthResetPasswordPostErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type ResetResetPasswordAuthResetPasswordPostError = ResetResetPasswordAuthResetPasswordPostErrors[keyof ResetResetPasswordAuthResetPasswordPostErrors];

export type ResetResetPasswordAuthResetPasswordPostResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type VerifyRequestTokenAuthRequestVerifyTokenPostData = {
    body: BodyVerifyRequestTokenAuthRequestVerifyTokenPost;
    path?: never;
    query?: never;
    url: '/auth/request-verify-token';
};

export type VerifyRequestTokenAuthRequestVerifyTokenPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type VerifyRequestTokenAuthRequestVerifyTokenPostError = VerifyRequestTokenAuthRequestVerifyTokenPostErrors[keyof VerifyRequestTokenAuthRequestVerifyTokenPostErrors];

export type VerifyRequestTokenAuthRequestVerifyTokenPostResponses = {
    /**
     * Successful Response
     */
    202: unknown;
};

export type VerifyVerifyAuthVerifyPostData = {
    body: BodyVerifyVerifyAuthVerifyPost;
    path?: never;
    query?: never;
    url: '/auth/verify';
};

export type VerifyVerifyAuthVerifyPostErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type VerifyVerifyAuthVerifyPostError = VerifyVerifyAuthVerifyPostErrors[keyof VerifyVerifyAuthVerifyPostErrors];

export type VerifyVerifyAuthVerifyPostResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type VerifyVerifyAuthVerifyPostResponse = VerifyVerifyAuthVerifyPostResponses[keyof VerifyVerifyAuthVerifyPostResponses];

export type UsersCurrentUserUsersMeGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/users/me';
};

export type UsersCurrentUserUsersMeGetErrors = {
    /**
     * Missing token or inactive user.
     */
    401: unknown;
};

export type UsersCurrentUserUsersMeGetResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type UsersCurrentUserUsersMeGetResponse = UsersCurrentUserUsersMeGetResponses[keyof UsersCurrentUserUsersMeGetResponses];

export type UsersPatchCurrentUserUsersMePatchData = {
    body: UserUpdate;
    path?: never;
    query?: never;
    url: '/users/me';
};

export type UsersPatchCurrentUserUsersMePatchErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Missing token or inactive user.
     */
    401: unknown;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UsersPatchCurrentUserUsersMePatchError = UsersPatchCurrentUserUsersMePatchErrors[keyof UsersPatchCurrentUserUsersMePatchErrors];

export type UsersPatchCurrentUserUsersMePatchResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type UsersPatchCurrentUserUsersMePatchResponse = UsersPatchCurrentUserUsersMePatchResponses[keyof UsersPatchCurrentUserUsersMePatchResponses];

export type UsersDeleteUserUsersIdDeleteData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/users/{id}';
};

export type UsersDeleteUserUsersIdDeleteErrors = {
    /**
     * Missing token or inactive user.
     */
    401: unknown;
    /**
     * Not a superuser.
     */
    403: unknown;
    /**
     * The user does not exist.
     */
    404: unknown;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UsersDeleteUserUsersIdDeleteError = UsersDeleteUserUsersIdDeleteErrors[keyof UsersDeleteUserUsersIdDeleteErrors];

export type UsersDeleteUserUsersIdDeleteResponses = {
    /**
     * Successful Response
     */
    204: void;
};

export type UsersDeleteUserUsersIdDeleteResponse = UsersDeleteUserUsersIdDeleteResponses[keyof UsersDeleteUserUsersIdDeleteResponses];

export type UsersUserUsersIdGetData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/users/{id}';
};

export type UsersUserUsersIdGetErrors = {
    /**
     * Missing token or inactive user.
     */
    401: unknown;
    /**
     * Not a superuser.
     */
    403: unknown;
    /**
     * The user does not exist.
     */
    404: unknown;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UsersUserUsersIdGetError = UsersUserUsersIdGetErrors[keyof UsersUserUsersIdGetErrors];

export type UsersUserUsersIdGetResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type UsersUserUsersIdGetResponse = UsersUserUsersIdGetResponses[keyof UsersUserUsersIdGetResponses];

export type UsersPatchUserUsersIdPatchData = {
    body: UserUpdate;
    path: {
        id: string;
    };
    query?: never;
    url: '/users/{id}';
};

export type UsersPatchUserUsersIdPatchErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Missing token or inactive user.
     */
    401: unknown;
    /**
     * Not a superuser.
     */
    403: unknown;
    /**
     * The user does not exist.
     */
    404: unknown;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UsersPatchUserUsersIdPatchError = UsersPatchUserUsersIdPatchErrors[keyof UsersPatchUserUsersIdPatchErrors];

export type UsersPatchUserUsersIdPatchResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type UsersPatchUserUsersIdPatchResponse = UsersPatchUserUsersIdPatchResponses[keyof UsersPatchUserUsersIdPatchResponses];

export type AuthenticatedRouteAuthenticatedRouteGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/authenticated-route';
};

export type AuthenticatedRouteAuthenticatedRouteGetResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type ReadUserByEmailUsersEmailEmailGetData = {
    body?: never;
    path: {
        email: string;
    };
    query?: never;
    url: '/users/email/{email}';
};

export type ReadUserByEmailUsersEmailEmailGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type ReadUserByEmailUsersEmailEmailGetError = ReadUserByEmailUsersEmailEmailGetErrors[keyof ReadUserByEmailUsersEmailEmailGetErrors];

export type ReadUserByEmailUsersEmailEmailGetResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type ReadUserByEmailUsersEmailEmailGetResponse = ReadUserByEmailUsersEmailEmailGetResponses[keyof ReadUserByEmailUsersEmailEmailGetResponses];

export type RootGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/';
};

export type RootGetResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type ClientOptions = {
    baseUrl: `${string}://openapi.json` | (string & {});
};