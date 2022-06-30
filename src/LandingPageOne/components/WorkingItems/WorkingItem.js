import styled from "styled-components";
import { COLORS } from "/src/styles";

export default ({ title, details, selected }) => (
  <Container selected={selected}>
    <h4 className="subtitle">{title}</h4>
    <p className="subdetails">{details}</p>
  </Container>
);

const Container = styled.div`
  height: 60rem;
  display: flex;
  flex-direction: column;
  min-width: 24rem;
  max-width: 30rem;
  justify-content: flex-end;
  border-radius: 2rem;
  padding: 5.6rem 3rem;

  background-color: ${({ selected }) =>
    selected ? COLORS.white : "transparent"};

  .subtitle {
    margin: auto 0 0;
    font-weight: 700;
    font-size: 3rem;
  }

  .subdetails {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${COLORS.text};
  }
`;
