import { useState } from "react";

export default (defaultValue: any): IUseInputReturn => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return {
    value,
    onChange
  };
};
