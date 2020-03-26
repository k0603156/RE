import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { RootStateType } from "@Store/modules";
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
  post: RootStateType["post"];
}
export default (props: IProps) => {
  const content = props.post.content;
  console.log(content);
  const [value, setValue] = useState<Array<Node>>(content);
  const editor = useMemo(() => withReact(createEditor()), []);
  return (
    <div>
      <Hashtags>
        {props.post.hashtags.map((hashtag: any) => `#${hashtag.name}`)}
      </Hashtags>
      <Title>{props.post.title}</Title>
      <UpdatedAt>{props.post.updatedAt}</UpdatedAt>
      <Owner>{props.post.user.userName}</Owner>
      <Content>
        <Slate editor={editor} value={value} onChange={v => setValue(v)}>
          <Editable readOnly />
        </Slate>
      </Content>
    </div>
  );
};
