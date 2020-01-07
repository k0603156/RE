interface IUseInputReturn<T> {
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: React.Dispatch<T>;
}
