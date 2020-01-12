import React from "react";
import _ from "lodash";
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
          onChange={_.debounce((event: any) => {
            input_content_header(
              event.currentTarget.dataset.entity,
              event.currentTarget.value
            );
          }, 200)}
        />

        {plan.contentArr.map((data: any, index: number) => (
          <ContentBody
            key={index}
            nthDate={index}
            data={data}
            onChange={_.debounce(
              (event: any) =>
                input_content_body(
                  index,
                  event.currentTarget.dataset.entity,
                  event.currentTarget.value
                ),
              200
            )}
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
