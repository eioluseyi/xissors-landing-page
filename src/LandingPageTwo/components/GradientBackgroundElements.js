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

	/* top: 0; */

	width: 100%;
	height: 100%;
`;

const EllipseOne = styled.span`
	width: 51.5rem;
	height: 51.5rem;
	border-radius: 50rem;

	display: block;
	position: absolute;
	top: 75rem;
	left: 50rem;

	background: linear-gradient(
		180deg,
		rgba(223, 43, 253, 0.32) 0%,
		rgba(249, 16, 254, 0.306) 100%
	);
	filter: blur(20rem);
	transform: matrix(-0.98, -0.18, -0.18, 0.98, 0, 0);
`;

const EllipseTwo = styled.span`
	width: 95rem;
	height: 95rem;
	border-radius: 50rem;

	display: block;
	position: absolute;
	top: 15rem;
	right: -10rem;

	background: linear-gradient(
		180deg,
		rgba(52, 120, 246, 0.252) 0%,
		rgba(52, 120, 246, 0.294) 100%
	);
	filter: blur(20rem);
	transform: rotate(-169.58deg);
`;

const EllipseThree = styled.span`
	width: 80rem;
	height: 80rem;
	border-radius: 50rem;

	display: block;
	position: absolute;
	top: 48%;
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
	top: 120rem;
	right: -20rem;
	transform: translate(-50%, -70%);

	background: linear-gradient(
		180deg,
		rgba(102, 82, 194, 0.4) 0%,
		rgba(102, 82, 194, 0.34) 100%
	);
	filter: blur(20rem);
	transform: matrix(-0.95, -0.3, -0.3, 0.95, 0, 0);
`;
