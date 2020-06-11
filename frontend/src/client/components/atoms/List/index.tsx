import React from "react";

interface IProps<T extends Array<any>> {
  wrapper: React.ElementType;
  dataList: T;
  temp: (data: IProps<T>["dataList"][0]) => React.ReactNode;
  footer?: React.ReactNode;
}
export default <T extends Array<any>>({
  wrapper,
  dataList,
  temp,
  footer,
}: IProps<T>) => {
  const Wrapper = wrapper;
  return (
    <Wrapper>
      {dataList.map(temp)}
      {footer}
    </Wrapper>
  );
};
