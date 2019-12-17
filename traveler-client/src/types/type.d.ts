export interface user {
  userName: string;
  isLogged: boolean;
}

export interface layout {
  component: ReactNode;
  route: ReactNode;
  user: user;
}
