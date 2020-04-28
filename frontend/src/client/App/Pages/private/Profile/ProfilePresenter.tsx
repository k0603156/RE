import React from "react";
import styled from "styled-components";
import { RootStateType } from "@Store/modules";
const Box = styled.div`
  min-height: 200px;
`;
const Profile = styled(Box)``;

interface IProps {
  profile: RootStateType["profile"];
}
export default (props: IProps) => {
  const { userName, posts } = props.profile;
  const isSelf = true;
  return (
    <div>
      <Profile>
        <h3>프로필</h3>

        <span>닉네임:</span>
        {userName}
      </Profile>
      {isSelf && (
        <>
          <Box>
            <h2>내가 작성한 글</h2>
            <ul>
              {posts.map((post: any) => {
                return <li key={post.id}>{post.title}</li>;
              })}
            </ul>
          </Box>
          <div>회원탈퇴</div>
        </>
      )}
    </div>
  );
};
