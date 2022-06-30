import styled from "styled-components";
import pbl from "../assets/phoneImages/phone-bottom1.png";
import pbr from "../assets/phoneImages/phone-bottom2.png";

export default () => (
  <>
    <PhoneBottomLeft src={pbl} />
    <PhoneBottomRight src={pbr} />
  </>
);

const PhoneBottomLeft = styled.img`
  position: absolute;
  width: 50rem;
  top: -60rem;
  left: 0;

  @media only screen and (max-width: 1000px) {
    display: none;
  }

  @media only screen and (max-width: 1200px) {
    top: -80rem;
    left: -5rem;
  }
`;

const PhoneBottomRight = styled.img`
  position: absolute;
  width: 50rem;
  top: -5rem;
  right: 0;

  @media only screen and (max-width: 1000px) {
    display: none;
  }

  @media only screen and (max-width: 1200px) {
    top: -30rem;
  }
`;
