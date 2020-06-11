import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  ${(props) => props.theme.LAYOUT_PADDING};
`;
interface IProps {
  component: any;
}
function PublicLayout({ component }: IProps) {
  const Component = component;
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

export default PublicLayout;
export { default as NotFound } from "./NotFound";
