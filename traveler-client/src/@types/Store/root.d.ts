type RootStateType = ReturnType<typeof rootReducer>;

type StoreType = Store<RootStateType>;

interface IAuthState {
  isLogged: boolean;
  user: {
    userName: string;
    email: string;
  };
}

type ActionLoginType = (email: string, password: string) => AUTH_ACTION_TYPES;

type ActionCheckOTPType = (otp: string) => AUTH_ACTION_TYPES;

type ActionChangeTokenType = () => AUTH_ACTION_TYPES;

type ActionLogoutType = (email: string) => AUTH_ACTION_TYPES;

type ActionCreateUserType = (
  userName: string,
  email: string,
  password: string,
  confirmPassword: string
) => USER_ACTION_TYPES;
