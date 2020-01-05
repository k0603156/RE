import React from "react";

export default (props: { user: any }) => {
  const { id, userName } = props.user;
  return (
    <div>
      <div>{id}</div>
      <div>{userName}</div>
    </div>
  );
};
