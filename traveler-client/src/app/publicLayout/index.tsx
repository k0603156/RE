import React, { ReactNode } from "react";
import { user, layout } from "types/type";

function PublicLayout({ component, route, user }: layout) {
  const Component = component;
  return (
    <div className="PublicLayout">
      <Component />
    </div>
  );
}

export default PublicLayout;
