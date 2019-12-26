import React, { ReactElement } from "react";

function PublicLayout(props: any) {
  const Component = props.component;
  return (
    <div className="PublicLayout">
      <Component />
    </div>
  );
}

export default PublicLayout;
