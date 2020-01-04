interface IUseInputReturn {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: React.Dispatch<any>;
}
