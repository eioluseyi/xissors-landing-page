import styled from "styled-components";
import { clienteleList } from "../db";

export default () => (
  <Container>
    {clienteleList.map((client, idx) => (
      <img
        key={idx}
        alt={client.title + " logo"}
        className="clientele-image"
        src={client.img}
        title={client.title}
      />
    ))}
  </Container>
);

const Container = styled.div`
  max-width: 88rem;
  margin: 0 auto;
  padding: 7rem 3rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  .clientele-image {
    max-height: 9rem;
  }
`;
