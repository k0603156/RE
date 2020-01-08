import React from "react";
import styled from "styled-components";
import { ContentHeader, ContentBody } from "Components/organisms";
import { Button } from "Components/atoms";

export default (props: {
  post: any;
  set_content_header: any;
  set_content_body: any;
  add_content: any;
  onSubmit: any;
}) => {
  const {
    post,
    set_content_header,
    set_content_body,
    add_content,
    onSubmit
  } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <ContentHeader
          data={post}
          onChange={(e: any) => {
            set_content_header(e.target.dataset.entry, e.target.value);
          }}
        />

        {post.contentArr.map((data: any, index: number) => (
          <ContentBody
            key={index}
            nthDate={index}
            data={data}
            onChange={(e: any) =>
              set_content_body(index, e.target.dataset.entry, e.target.value)
            }
          />
        ))}
        <Button type={"submit"} style={"wide"}>
          포스팅
        </Button>
        <Button type={"button"} onClick={() => add_content()} style={"wide"}>
          일정 추가
        </Button>
      </form>
    </div>
  );
};
