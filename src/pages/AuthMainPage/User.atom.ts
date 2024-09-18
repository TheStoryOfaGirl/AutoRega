import { atom } from "recoil";

type UserState = {
  name: string;
};

export const userAtom = atom<UserState>({
  key: "user",
  default: {
    name: "",
  },
});
