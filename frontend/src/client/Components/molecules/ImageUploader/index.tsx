import React, { useState } from "react";
import styled from "styled-components";
interface IProps {
  className?: string;
}
export default styled((props: IProps) => {
  const [file, setFile] = useState("");
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.files && setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className={props.className}>
      <img src={file} />
      <input type="file" onChange={onChange} />
    </div>
  );
})``;
