import React from "react";
import { Input, Box, Button, TextArea, Badge } from "@Client/Components/atoms";
import { SearchableSelector } from "@Client/Components/molecules";
import CountryData from "@Client/data/country";

export default (props: {
  plan: any;
  input_plan_header: (event: React.ChangeEvent<any>) => void;
  input_plan_story: (event: React.ChangeEvent<any>) => void;
  increase_story: () => void;
  onSubmit: (event: React.ChangeEvent<any>) => void;
}) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <Box>
          <label htmlFor="ht">제목</label>
          <Input
            id={"ht"}
            name={"title"}
            defaultValue={props.plan.header.title}
            onChange={props.input_plan_header}
            type={"text"}
            maxLength={100}
          />
          <label htmlFor="hfd">fromDate</label>
          <Input
            id={"hfd"}
            name={"fromDate"}
            defaultValue={props.plan.header.fromDate}
            onChange={props.input_plan_header}
            type={"date"}
          />
          <label htmlFor="htd">toDate</label>
          <Input
            id={"htd"}
            name={"toDate"}
            defaultValue={props.plan.header.toDate}
            onChange={props.input_plan_header}
            type={"date"}
          />
          <label htmlFor="hc">country</label>
          <SearchableSelector
            id={"hc"}
            entry={"country"}
            defaultValue={CountryData[Number(props.plan.header.country)].value}
            onChange={props.input_plan_header}
            options={CountryData}
          />
          <label htmlFor="hmb">mainBody</label>
          <TextArea
            id={"hmb"}
            name={"mainBody"}
            defaultValue={props.plan.header.mainBody}
            onChange={props.input_plan_header}
            maxLength={100}
          />
        </Box>
        {props.plan.storyArr.map((data: any, index: number) => (
          <Box key={index}>
            <div>
              <Badge>{"Day+" + (index + 1)}</Badge>
            </div>
            <label htmlFor={`st+${index}`}>title</label>
            <Input
              id={`st+${index}`}
              defaultValue={data.title}
              name={"title"}
              data-idx={index}
              onChange={props.input_plan_story}
              type={"text"}
              maxLength={100}
            />
            <label htmlFor={`sd+${index}`}>date</label>
            <Input
              id={`sd+${index}`}
              defaultValue={data.date}
              name={"date"}
              data-idx={index}
              onChange={props.input_plan_story}
              type={"date"}
            />
            <label htmlFor={`sc+${index}`}>content</label>
            <TextArea
              id={`sc+${index}`}
              defaultValue={data.content}
              name={"content"}
              data-idx={index}
              onChange={props.input_plan_story}
              maxLength={100}
            />
          </Box>
        ))}
        <Box>
          <Button type={"submit"}>포스팅</Button>
          <Button type={"button"} onClick={props.increase_story}>
            일정 추가
          </Button>
        </Box>
      </form>
    </div>
  );
};
