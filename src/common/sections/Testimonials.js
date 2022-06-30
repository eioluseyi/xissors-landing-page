import styled from "styled-components";
import { COLORS } from "/src/styles";
import Avatars from "../components/Avatars";
import { testimonials } from "../db";

export default () => (
  <Container>
    <Avatars avatarList={testimonials} />
    <div className="quote">
      “This is a game changer. I’ve been able to quit my day job, and run my own
      businesses because of this. Not only that, I’ve been able to thrive”
    </div>
    <div className="name">Joanna, 38</div>
    <div className="location">new york</div>
  </Container>
);

const Container = styled.div`
  padding: 10rem 3rem;
  max-width: 60rem;
  margin: 0 auto;
  text-align: center;
  color: ${COLORS.black};

  .quote {
    font-weight: 500;
    font-size: 3rem;
    margin-top: 3rem;
  }

  .name {
    font-weight: 600;
    font-size: 2rem;
    opacity: 0.5;
    margin-top: 3rem;
  }

  .location {
    font-weight: 600;
    font-size: 1.3rem;
    text-transform: uppercase;
    opacity: 0.3;

    margin-top: 0.6rem;
  }
`;
