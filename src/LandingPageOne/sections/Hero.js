import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as AppstoreDownload } from "../assets/appstore-download.svg";
import heroBg from "../assets/hero-bg.png";
import crown from "/src/common/assets/crown.svg";
import { COLORS } from "/src/styles";

export default () => (
  <Container>
    <Logo className="logo" />
    <h1 className="headline">
      Get 40<span className="crown-percent">%</span> commission
      <br />
      for your sales
    </h1>
    <p className="sub-hero">
      We help stylists own their narrative, build an empire and be their own
      boss
    </p>
    <AppstoreDownload className="appstore-download" />
  </Container>
);

const Container = styled.div`
  background: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: bottom;
  background-position: center bottom;
  background-attachment: fixed;

  height: 100vh;
  padding: 7.5rem 3rem;
  box-sizing: border-box;

  text-align: center;
  color: ${COLORS.white};

  .logo {
    width: 22.7rem;
  }

  .headline {
    font-size: 7rem;
    font-weight: 500;
    margin: 20rem 0 0;
  }

  .crown-percent {
    position: relative;

    &::after {
      content: url(${crown});
      position: absolute;
      right: -5rem;
      top: -4rem;
    }
  }

  .sub-hero {
    font-size: 2rem;
    font-weight: 400;
    max-width: 47rem;
    margin: 2.2rem auto;
  }

  .appstore-download {
    margin-top: 6rem;
  }
`;
