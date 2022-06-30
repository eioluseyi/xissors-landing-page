import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { COLORS } from "/src/styles";

export default () => (
  <Container>
    <div className="container-box">
      <Logo className="logo" />
      <div className="questions">Got Questions?</div>
      <div className="email">
        <a href="mailto:hello@xissors.com">hello@xissors.com</a>
      </div>
      <div className="copyright">© Xissors 2022</div>
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  padding: 0 3rem;

  .container-box {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};

    width: 100%;
    margin: 0 auto;
    min-width: 20rem;
    max-width: 108rem;
    padding: 5rem 5rem 3rem;
    border-radius: 9rem 9rem 0 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      width: 22.7rem;
    }

    .questions {
      margin-top: 4rem;
      line-height: 3.4rem;
      font-size: 2.1rem;
    }

    .email {
      margin-top: 0.5rem;
      font-size: 2.9rem;

      a {
        color: ${COLORS.white};
        text-decoration: none;
      }
    }

    .copyright {
      margin-top: 6.3rem;
      font-size: 1.8rem;
      opacity: 0.6;
    }
  }
`;
