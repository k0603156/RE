import React from "react";
// import styled from "styled-components";
import { ContentHeader, ContentBody } from "Components/organisms";
import { Button } from "Components/atoms";

export default (props: {
  plan: any;
  input_content_header: any;
  input_content_body: any;
  increase_content: any;
  onSubmit: any;
}) => {
  const {
    plan,
    input_content_header,
    input_content_body,
    increase_content,
    onSubmit
  } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <ContentHeader
          data={plan}
          onChange={(e: any) => {
            input_content_header(e.target.dataset.entry, e.target.value);
          }}
        />

        {plan.contentArr.map((data: any, index: number) => (
          <ContentBody
            key={index}
            nthDate={index}
            data={data}
            onChange={(e: any) =>
              input_content_body(index, e.target.dataset.entry, e.target.value)
            }
          />
        ))}
        <Button type={"submit"} custom={"wide"}>
          포스팅
        </Button>
        <Button
          type={"button"}
          onClick={() => increase_content()}
          custom={"wide"}
        >
          일정 추가
        </Button>
      </form>
    </div>
  );
};
