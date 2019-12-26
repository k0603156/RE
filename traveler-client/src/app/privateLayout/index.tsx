import React, { ReactNode } from "react";

function PrivateLayout(props: any) {
  const Component = props.component;
  return (
    <div className="PrivateLayout">
      <Component />
    </div>
  );
}

export default PrivateLayout;
