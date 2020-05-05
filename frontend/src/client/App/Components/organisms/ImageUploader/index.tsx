import React, { useState } from "react";
import styled from "styled-components";
interface IProps {
  className?: string;
}
export default styled((props: IProps) => {
  const [file, setFile] = useState("");
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.files && setFile(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files);
  }
  return (
    <div className={props.className}>
      <img className={"preview"} src={file} />
      <input type="file" onChange={onChange} />
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  img.preview {
    max-width: 100%;
  }
`;
