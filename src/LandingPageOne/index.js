import styled from "styled-components";

import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Clientele from "../common/sections/Clientele";
import Testimonials from "../common/sections/Testimonials";
import Download from "../common/sections/Download";
import Footer from "./sections/Footer";

export default () => {
  return (
    <Container>
      <Hero />
      <HowItWorks />
      <Clientele />
      <Testimonials />
      <Download />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  font-size: 18px;
`;
