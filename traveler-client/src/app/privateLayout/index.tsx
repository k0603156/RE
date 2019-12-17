import React, { ReactNode } from "react";
import { user, layout } from "types/type";

function PrivateLayout({ component, route, user }: layout) {
  const Component = component;
  return (
    <div className="PrivateLayout">
      <Component />
    </div>
  );
}

export default PrivateLayout;
