import styled from "styled-components";
import GradientBackgroundElements from "../components/GradientBackgroundElements";
import PhoneLayer from "../components/PhoneLayer";
import WorkingItems from "../components/WorkingItems";
import { COLORS } from "/src/styles";

const workingItemsList = [
  {
    title: "Earn",
    details: "Earn a 40% commission on products you sell to your customers"
  },
  {
    title: "Collect",
    details:
      "No dongle or hardware needed. All you need to collect payments is your iphone"
  },
  {
    title: "Thrive",
    details: "Withdraw cash out of your account whenever you want"
  }
];

export default () => (
  <>
    <Container>
      <GradientBackgroundElements />
      <PhoneLayer />
      <div className="glass-container">
        <h2 className="title">How it works</h2>
        <div className="details">
          We help stylists own their narrative, build an empire and be their own
          boss
        </div>
        <WorkingItems list={workingItemsList} />
      </div>
    </Container>
  </>
);

const Container = styled.div`
  padding: 8rem 3rem 0;
  text-align: center;
  position: relative;
  /* overflow: hidden; */

  .glass-container {
    padding: 6rem;
    max-width: 128rem;
    margin: 0 auto;
    border-radius: 4rem;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(1rem);
  }

  .title {
    font-size: 5.6rem;
    font-weight: 700;
    color: ${COLORS.heading};
    margin: 0;
  }

  .details {
    font-size: 2rem;
    font-weight: 200;
    color: ${COLORS.text};
    margin-top: 2.2rem;
  }
`;
