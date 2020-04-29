import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RootStateType } from "@Services/Store/modules";

interface IProps {
  className?: string;
  post: RootStateType["board"]["rows"][0];
}
const PostBox = ({ className, post }: IProps) => {
  return (
    <div className={className}>
      <div className={"title"}>
        <Link to={`/board/post/${post.id}`} key={post.id}>
          {post && post.title}
        </Link>
      </div>
      <div className={"author"}>{post && post.user.userName} </div>
      <div className={"time"}>{post && post.updatedAt}</div>
      <div className={"hash"}>#tag</div>
    </div>
  );
};

export default styled(PostBox)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 20px;
  margin-top: 15px;

  * {
    margin: 3px 0;
  }

  div.title {
    flex: 5;
    font-size: 1rem;
    font-weight: 500;
    color: rgb(21, 18, 31);
  }
  div.author {
    flex: 1;
    text-align: right;
    font-size: 0.8rem;
    font-weight: 400;
    color: rgb(21, 18, 31);
  }
  div.time {
    flex: 2;
    text-align: right;
    font-size: 0.7rem;
    font-weight: 400;
    color: ${(props) => props.theme.lightGreyColor};
  }
  div.hash {
    width: 100%;
    font-size: 0.7rem;
    color: ${(props) => props.theme.normalGreyColor};
  }
`;
