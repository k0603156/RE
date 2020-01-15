import React from "react";
import styled from "styled-components";
const Box = styled.div`
  min-height: 200px;
`;
const Profile = styled(Box)``;
const MyContents = styled(Box)``;

export default (props: { user: any }) => {
  const { userName } = props.user;
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
          <MyContents>내가 작성한 글</MyContents>
          <div>회원탈퇴</div>
        </>
      )}
    </div>
  );
};
