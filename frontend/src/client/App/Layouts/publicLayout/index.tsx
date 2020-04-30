import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  ${(props) => props.theme.layoutAttr};
`;
function PublicLayout(props: { component: any }) {
  const Component = props.component;
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

export default PublicLayout;
export { default as NotFound } from "./NotFound";
