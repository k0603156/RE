import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { ContentHeader, ContentBody } from "Components/organisms";
import { Button } from "Components/atoms";

export default (props: {
  plan: any;
  input_plan: any;
  input_story: any;
  increase_story: any;
  onSubmit: any;
}) => {
  const { plan, input_plan, input_story, increase_story, onSubmit } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <ContentHeader
          data={plan}
          onChange={_.debounce((event: any) => {
            input_plan(
              event.currentTarget.dataset.entity,
              event.currentTarget.value
            );
          }, 50)}
        />

        {plan.storyArr.map((data: any, index: number) => (
          <ContentBody
            key={index}
            nthDate={index}
            data={data}
            onChange={_.debounce(
              (event: any) =>
                input_story(
                  index,
                  event.currentTarget.dataset.entity,
                  event.currentTarget.value
                ),
              50
            )}
          />
        ))}
        <Button type={"submit"} custom={"wide"}>
          포스팅
        </Button>
        <Button
          type={"button"}
          onClick={() => increase_story()}
          custom={"wide"}
        >
          일정 추가
        </Button>
      </form>
    </div>
  );
};
