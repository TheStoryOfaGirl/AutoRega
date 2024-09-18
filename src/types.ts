export type AuthVariant = "email" | "phone" | "password";

export type AuthCodeFormValues = {
  email: string;
  code: string;
};

export type AuthEmailFormValues = {
  email: string;
};

export type AuthPasswordFormValues = {
  username: string;
  password: string;
};

export type RegistrationFormValues = {
  email: string;
  password: string;
  phone: string;
  name: string;
};

export type ForgotPasswordFormValues = {
  email: string;
};

export type ResetPasswordFormValues = {
  password: string;
  token: string;
};
