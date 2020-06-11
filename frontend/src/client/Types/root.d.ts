type RootStateType = ReturnType<typeof rootReducer>;

type StoreType = Store<RootStateType>;

type AxiosPromiseType = AxiosPromise<any>;

interface IUseInputReturn<T> {
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: React.Dispatch<T>;
}
