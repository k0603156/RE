import { useState } from "react";

const useInput = <T>(defaultValue: T): IUseInputReturn<T> => {
  const [value, setValue] = useState<T>(defaultValue);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange,
    setValue
  };
};
export default useInput;
