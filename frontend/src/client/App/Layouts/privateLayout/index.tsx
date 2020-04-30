import React from "react";
import styled from "styled-components";
const Layout = styled.div`
  ${(props) => props.theme.layoutAttr};
`;
function PrivateLayout(props: { component: any }) {
  const Component = props.component;
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

export default PrivateLayout;
