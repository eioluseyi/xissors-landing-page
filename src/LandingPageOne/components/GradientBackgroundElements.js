import React from "react";
import styled from "styled-components";

export default () => (
  <Container>
    <EllipseOne />
    <EllipseTwo />
    <EllipseThree />
    <EllipseFour />
  </Container>
);

const Container = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const EllipseOne = styled.span`
  width: 51.5rem;
  height: 51.5rem;
  border-radius: 50rem;

  display: block;
  position: absolute;
  bottom: 10rem;
  left: -10rem;

  background: linear-gradient(
    180deg,
    rgba(223, 43, 253, 0.21) 0%,
    rgba(249, 16, 254, 0.203) 100%
  );
  opacity: 0.5;
  filter: blur(20rem);
  transform: matrix(-0.98, -0.18, -0.18, 0.98, 0, 0);
`;

const EllipseTwo = styled.span`
  width: 64rem;
  height: 64rem;
  border-radius: 50rem;

  display: block;
  position: absolute;
  top: -10rem;
  right: -10rem;

  background: linear-gradient(
    180deg,
    rgba(102, 82, 194, 0.2) 0%,
    rgba(102, 82, 194, 0.17) 100%
  );
  filter: blur(20rem);
  transform: matrix(-0.98, -0.18, -0.18, 0.98, 0, 0);
`;

const EllipseThree = styled.span`
  width: 80rem;
  height: 80rem;
  border-radius: 50rem;

  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: linear-gradient(
    180deg,
    rgba(52, 120, 246, 0.126) 0%,
    rgba(52, 120, 246, 0.147) 100%
  );
  filter: blur(20rem);
`;

const EllipseFour = styled.span`
  width: 55rem;
  height: 55rem;
  border-radius: 50rem;

  display: block;
  position: absolute;
  bottom: 20rem;
  right: -20rem;
  transform: translate(-50%, -70%);

  background: linear-gradient(
    180deg,
    rgba(102, 82, 194, 0.2) 0%,
    rgba(102, 82, 194, 0.17) 100%
  );
  filter: blur(20rem);
  transform: matrix(-0.95, -0.3, -0.3, 0.95, 0, 0);
`;
