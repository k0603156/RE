import React from "react";
import styled from "styled-components";
import Input from "Components/Form/Input";
import SearchableSelect from "Components/Form/SearchableSelect";
import { ContentHeader, ContentBody } from "Components/Content";
import { NormalButton } from "Components/Button";
import CountryData from "data/country";
export default (props: {
  post: any;
  set_content_header: any;
  set_content: any;
  add_content: any;
  onSubmit: any;
}) => {
  const {
    post,
    set_content_header,
    set_content,
    add_content,
    onSubmit
  } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <ContentHeader data={post.header} />

        {post.contentArr.map((data: any, index: number) => (
          <ContentBody
            data={data}
            nthDate={index}
            key={index}
            onChange={(e: any) =>
              set_content(index, e.target.dataset.entry, e.target.value)
            }
          />
        ))}
        <NormalButton text={"포스팅"} type={"submit"} />
        <NormalButton
          text={"일정 추가"}
          type={"button"}
          onClick={() => add_content()}
        />
      </form>
    </div>
  );
};
