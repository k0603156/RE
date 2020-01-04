import { useState } from "react";

const useInput = (defaultValue: any): IUseInputReturn => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return {
    value,
    onChange,
    setValue
  };
};
export default useInput;
