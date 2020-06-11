import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  ${(props) => props.theme.LAYOUT_PADDING};
`;

const NotFound = () => {
  return <Layout>Not found</Layout>;
};

export default NotFound;
