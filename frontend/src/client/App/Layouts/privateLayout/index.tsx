import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  ${(props) => props.theme.layoutAttr};
`;
function PrivateLayout({ component }: { component: any }) {
  const Component = component;
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

export default PrivateLayout;
