import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { RootStateType } from "client/configureStore";

const Hashtags = styled.div`
  font-size: 0.8rem;
`;
const Title = styled.h3`
  font-size: 1.2rem;
`;
const UpdatedAt = styled.div`
  text-align: right;
`;
const Owner = styled.div`
  text-align: right;
`;
const Content = styled.div``;

interface IProps {
  title: RootStateType["post"]["title"];
  updatedAt: RootStateType["post"]["updatedAt"];
  hashtags: RootStateType["post"]["hashtags"];
  userName: RootStateType["post"]["user"]["userName"];
  content: RootStateType["post"]["content"];
}
export default ({ title, content, hashtags, updatedAt, userName }: IProps) => {
  const [value, setValue] = useState<Array<Node>>([]);
  const editor = useMemo(() => withHistory(withReact(createEditor())), [value]);
  useEffect(() => {
    setValue(content);
    return () => {};
  }, [content]);
  return (
    <div>
      <Hashtags>{hashtags.map((hashtag: any) => `#${hashtag.name}`)}</Hashtags>
      <Title>{title}</Title>
      <UpdatedAt>{updatedAt}</UpdatedAt>
      <Owner>{userName}</Owner>
      <Content>
        <Slate editor={editor} value={value} onChange={(v) => setValue(v)}>
          <Editable readOnly />
        </Slate>
      </Content>
    </div>
  );
};
