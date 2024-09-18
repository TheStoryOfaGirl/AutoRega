export type TokenName = "accessToken" | "refreshToken";

export type Token = string;

export const getToken = (tokenName: TokenName): Token => {
  const current_token = localStorage.getItem(tokenName);
  return current_token ?? "";
};

export const saveToken = (tokenName: TokenName, token: Token): void => {
  localStorage.setItem(tokenName, token);
};

export const dropToken = (tokenName: TokenName): void => {
  localStorage.removeItem(tokenName);
};
