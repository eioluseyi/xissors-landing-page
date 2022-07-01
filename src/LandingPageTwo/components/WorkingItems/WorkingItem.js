import styled from "styled-components";
import { COLORS } from "src/styles";

export default ({ title, details, img, selected }) => (
	<Container selected={selected}>
		<img className="icon" src={img} />
		<h4 className="subtitle">{title}</h4>
		<p className="subdetails">{details}</p>
	</Container>
);

const Container = styled.div`
	height: 20rem;
	display: flex;
	flex-direction: column;
	min-width: 24rem;
	max-width: 30rem;
	justify-content: flex-end;
	border-radius: 2rem;
	padding: 5.6rem 3rem;

	background-color: ${COLORS.white};

	/* ${({ selected }) => (selected ? COLORS.white : "transparent")}; */

	.icon {
		width: 18rem;
		position: relative;
		top: -5rem;
		margin: 0 auto;
	}

	.subtitle {
		margin: auto 0 0;
		font-weight: 700;
		font-size: 3rem;
	}

	.subdetails {
		font-size: 1.6rem;
		font-weight: 400;
		color: ${COLORS.text};
	}
`;
