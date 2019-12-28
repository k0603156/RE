import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  ${props => props.theme.layout};
`;

function PublicLayout(props: any) {
  const Component = props.component;
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

export default PublicLayout;
