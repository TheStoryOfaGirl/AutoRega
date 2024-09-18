export const URLS = {
  MAIN: "/",
  AUTH_CHOICE: "/auth-choice",
  MAIN_AUTH: "/main-auth",
  AUTH: {
    EMAIL: "/auth/email",
    PHONE: "/auth/phone",
    PASSWORD: "/auth/password",
    EMAIL_CODE: "/auth/email/code",
    PHONE_CODE: "/auth/phone/code",
  },
  REGISTER: "/register",
  RESET_PASSWORD: {
    FORGOT: "/password/forgot",
    RESET: "/password/reset",
  },
  NOT_FOUND: "*",
};

interface ErrorTranslator {
  [key: string]: string;
}

export const ERROR_TRANSLATOR: ErrorTranslator = {
  RESET_PASSWORD_BAD_TOKEN:
    "Ссылка устарела. Попробуйте ввести почту ещё раз для сброса пароля.",
  "User with this email already exists.":
    "Пользователь с данным email уже существует.",
  "User with this phone already exists.":
    "Пользователь с данным телефоном уже существует.",
  "User with this name already exists.":
    "Пользователь с данным именем уже существует.",
  "User not found.": "Пользователь с данным email не найден.",
  "Code not found.": "Срок действия кода истек. Отправьте код еще раз.",
  "Incorrect code!": "Некорректный код.",
  LOGIN_BAD_CREDENTIALS: "Неверный логин или пароль.",
};
