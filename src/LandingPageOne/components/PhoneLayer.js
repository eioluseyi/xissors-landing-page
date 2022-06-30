import styled from "styled-components";
import ptl from "../assets/phoneImages/phone-top1.png";
import ptr from "../assets/phoneImages/phone-top2.png";

export default () => (
  <>
    <PhoneTopLeft src={ptl} />
    <PhoneTopRight src={ptr} />
  </>
);

const PhoneTopLeft = styled.img`
  position: absolute;
  /* width: 55rem; */
  top: -45rem;
  left: 0;

  @media only screen and (max-width: 1000px) {
    display: none;
  }

  @media only screen and (max-width: 1200px) {
    top: -30rem;
  }
`;

const PhoneTopRight = styled.img`
  position: absolute;
  /* width: 55rem; */
  top: -25rem;
  right: 0;

  @media only screen and (max-width: 1050px) {
    display: none;
  }

  @media only screen and (max-width: 1200px) {
    top: -35rem;
  }
`;
