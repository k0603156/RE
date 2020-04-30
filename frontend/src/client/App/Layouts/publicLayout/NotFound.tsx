import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  ${(props) => props.theme.layoutAttr};
`;

const NotFound: React.FC = () => {
  return <Layout>Not found</Layout>;
};

export default NotFound;
