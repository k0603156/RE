type StoreType = Store<RootStateType>;

interface IAuthState {
  isLogged: boolean;
  isAdmin: boolean;
  me: {
    email: string;
    userName: string;
  };
}
interface IMsgState {
  isAlert: boolean;
  msgType: string;
  actionType: any;
  status: any;
  message: any;
}

type ActionCreateUserType = (
  userName: string,
  email: string,
  password: string,
  confirmPassword: string,
  callback: () => void
) => USER_ACTION_TYPES;

type AxiosPromiseType = AxiosPromise<any>;
