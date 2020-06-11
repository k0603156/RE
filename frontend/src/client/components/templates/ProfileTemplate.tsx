import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RootStateType } from "client/services/store";

interface IProps {
  className?: string;
  profile: RootStateType["profile"];
}
export default styled(({ className, profile: { userName, posts } }: IProps) => {
  // const isSelf = true;
  return (
    <div className={className}>
      <div className="profile">
        <p className="username">{userName}</p>
        <p className="bio">bio............</p>
      </div>
      <div className="postlist">
        <h3>작성한 글</h3>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.updatedAt}>
                <Link to={`/board/post/${post.id}`}>
                  <div>{post.title}</div>
                  <div>{post.updatedAt}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="follow">
        <h3>follow</h3>
      </div>
      <div className="follower">
        <h3>follower</h3>
      </div>
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 10px;
  margin: auto;
  margin-bottom: 20px;
  > div:not(:first-of-type) {
    margin-top: 20px;
  }
  .username {
    font-size: 1.2rem;
    color: #101010;
  }
  .bio {
    font-size: 1rem;
    color: #101010;
  }
  .postlist {
    margin-top: 20px;
    ul {
      margin-top: 5px;
      li:not(:first-of-type) {
        margin-top: 5px;
      }
    }
  }
`;
