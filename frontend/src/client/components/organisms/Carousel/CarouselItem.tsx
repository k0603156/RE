import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RootStateType } from "client/configureStore";

interface IProps {
  className?: string;
  length: number;
  data: RootStateType["main"]["postlist"][0];
}

export default styled(({ className, data }: IProps) => {
  return (
    <div className={className} key={data.id}>
      <h2 className="title">
        <Link to={`board/post/${data.id}`}>{data.title}</Link>
      </h2>
      <div className="username">@{data.user.userName}</div>
      <div className="updatedat">{data.updatedAt}</div>
      <div className="tags">
        {data.hashtags.map((hashtag) => (
          <span key={hashtag.name}>#{hashtag.name}</span>
        ))}
      </div>
      <div className="views">views {data.readcount}</div>
    </div>
  );
})`
  height: 100%;
  width: ${({ length }) => 100 / length}%;
  background: ${({ theme }) => theme.COLORS.TRENDY.BLUE};
  ${({ theme }) => `
  ${theme.DEFAULT.BOX.BASE}
  ${theme.DEFAULT.BOX_SHADOW}
  ${theme.DEFAULT.BORDER_RADIUS}
  `}
  div {
    margin-top: 5px;
  }
  div.tags {
    display: flex;
    width: 100%;
    ${({ theme }) => theme.FONT_STYLES.MONTSERRAT.SMALL.THIN.WHITE}
    span {
      border: 1px solid lightgray;
      border-radius: 3px;
      padding: 2px 4px;
      &:not(:last-of-type) {
        margin-right: 3px;
      }
    }
  }
  h2.title a {
    ${({ theme }) => theme.FONT_STYLES.MONTSERRAT.XLARGE.REGULAR.WHITE}
  }
  div.username {
    text-align: right;
    ${({ theme }) => theme.FONT_STYLES.MONTSERRAT.MEDIUM.THIN.WHITE}
  }
  div.updatedat,
  div.views {
    text-align: right;
    ${({ theme }) => theme.FONT_STYLES.MONTSERRAT.SMALL.THIN.WHITE}
  }
`;
