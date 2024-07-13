export const API_BASE_URL = "https://teragist-ex44.onrender.com";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint
export const LOGIN = getApiUrl("/auth/api/v1/account/login/");
export const APPLOGOUT = getApiUrl("/auth/api/v1/account/logout/");
export const INSTALLED = getApiUrl("/client/api/v1/installed/");
export const CREATEACCOUNT = getApiUrl("/auth/api/v1/account/client/sign-up/");
export const VERIFYEMAIL = getApiUrl("/auth/api/v1/account/email/verification/");
export const PASSWORDRESET = getApiUrl("/auth/api/v1/account/reset-password/");
export const VALIDATEOTP = getApiUrl("/auth/api/v1/account/email/otp/verification/");
export const GETUSER = getApiUrl("/auth/api/v1/client/user/profile");
export const PROFILESETUP = getApiUrl("/auth/api/v1/client/update/user/profile/");

export const PASSWORDUPDATE = getApiUrl("/auth/api/v1/account/change-password/");



