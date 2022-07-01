import { COLORS } from "src/styles";
import styled from "styled-components";

export default ({ title, href }) => <Container href={href}>{title}</Container>;

const Container = styled.a`
	@keyframes bouncebounce {
		0% {
			transform: translateY(-5rem);
		}
		10% {
			transform: translateY(-2.2rem);
		}
		20% {
			transform: translateY(-5rem);
		}
	}

	letter-spacing: 0.2rem;
	animation: bouncebounce 2s 0.02s infinite ease-out alternate;
	transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

	&:hover {
		animation: none;
		letter-spacing: 0.4rem;
		box-shadow: 0rem 0rem 7rem rgba(255, 255, 255, 0.3);
	}

	position: fixed;
	padding: 1rem 3rem;
	border-radius: 3rem;
	background-color: ${COLORS.primary};

	right: 5rem;
	bottom: 5rem;
	transform: translateY(-5rem);

	text-decoration: none;
	color: ${COLORS.white};
`;
