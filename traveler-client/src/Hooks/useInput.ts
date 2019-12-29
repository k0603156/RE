import { useState } from "react";
interface IProps {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: React.Dispatch<any>;
}
export default (defaultValue: any): IProps => {
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
