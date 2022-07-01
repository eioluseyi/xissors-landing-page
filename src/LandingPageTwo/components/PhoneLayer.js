import styled from "styled-components";
import pstr from "../assets/phoneImages/phones-top.png";

export default () => (
	<>
		<PhonesTopRight src={pstr} />
	</>
);

const PhonesTopRight = styled.img`
	position: absolute;
	top: -93rem;
	right: 0;

	@media only screen and (max-width: 1300px) {
		width: 80rem;
		top: -90rem;
	}

	@media only screen and (max-width: 1150px) {
		width: 60rem;
		top: -90rem;
	}

	@media only screen and (max-width: 950px) {
		width: 60rem;
		top: -55rem;
	}

	@media only screen and (max-width: 900px) {
		display: none;
	}
`;
