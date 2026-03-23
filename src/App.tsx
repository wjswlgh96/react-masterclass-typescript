import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

export default function App() {
  return (
    <Container>
      <H1>Hello</H1>
    </Container>
  );
}
