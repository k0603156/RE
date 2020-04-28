import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  > * {
    margin: 3px 0;
  }
`;
const Hash = styled.div`
  font-size: 0.7rem;
  color: ${props => props.theme.normalGreyColor};
`;
const Title = styled.h5`
  font-size: 0.9rem;
  font-weight: 500;
`;
const Written = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`;
const Time = styled.span`
  font-size: 0.7rem;
  font-weight: 400;
  color: ${props => props.theme.lightGreyColor};
`;
const Content = styled.div`
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 400;
  max-height: 3rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const PostBox = ({ post, index }: any) => {
  return (
    <Box>
      <Hash></Hash>
      <Link to={`/board/post/${index}`} key={index}>
        <Title>{post && post.title}</Title>
      </Link>
      <Written>
        {post && post.user.userName} <Time>{post && post.updatedAt}</Time>
      </Written>

      {/* <Content> 
        Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
        aperiam delicata est. Lorem ipsum dolor sit amet, adhuc nulla definiebas
        mei ad, ei doming aperiam delicata est. Lorem ipsum dolor sit amet,
        adhuc nulla definiebas mei ad, ei doming aperiam delicata est. Lorem
        ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam
        delicata est.
      </Content> */}
    </Box>
  );
};

export default PostBox;
