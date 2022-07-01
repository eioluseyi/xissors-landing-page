import styled from "styled-components";
import pbl from "../assets/phoneImages/phone-bottom1.png";
import pbls from "../assets/phoneImages/phone-bottom1-success.svg";
import pbr from "../assets/phoneImages/phone-bottom2.png";

export default ({ showSuccess }) => (
	<>
		<BottomLeftWrapper showSuccess={showSuccess}>
			<PhoneBottomLeft src={pbl} />
		</BottomLeftWrapper>
		<PhoneBottomRight src={pbr} />
	</>
);

const BottomLeftWrapper = styled.span`
	position: absolute;
	top: -60rem;
	left: 0;

	img {
		width: 50rem;
	}

	&::after {
		content: ${({ showSuccess }) => (showSuccess ? `url(${pbls})` : "")};
		position: absolute;
		right: 15rem;
		bottom: 3.5rem;
		transform: scale(0.75);
	}

	@media only screen and (max-width: 1000px) {
		display: none;
	}

	@media only screen and (max-width: 1200px) {
		top: -80rem;
		left: -5rem;
	}
`;

const PhoneBottomLeft = styled.img`
	/* position: absolute;
	width: 50rem;
	top: -60rem;
	left: 0; */
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
