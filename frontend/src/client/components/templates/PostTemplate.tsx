import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { RootStateType } from "client/services/store";

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
export default (props: IProps) => {
  const { title, content, hashtags, updatedAt, userName } = props;
  const [value, setValue] = useState<Array<Node>>(content);
  const editor = useMemo(() => withReact(createEditor()), []);
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
