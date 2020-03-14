import React from "react";
import { Input, Box, Button, TextArea, Badge } from "@Client/Components/atoms";
import { SearchableSelector } from "@Client/Components/molecules";
import { Editor } from "@Client/Components/organisms";

export default (props: {
  onSubmit: (event: React.ChangeEvent<any>) => void;
}) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <Editor />
      </form>
    </div>
  );
};
