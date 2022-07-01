import styled from "styled-components";
import WorkingItem from "./WorkingItem";

export default ({ list }) => (
	<Container>
		{list.map((item, idx) => (
			<WorkingItem
				key={idx}
				title={item.title}
				details={item.details}
				img={item.img}
				selected={idx === 1}
			/>
		))}
	</Container>
);

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 5rem;
	justify-content: space-around;
	margin: 0 auto;
	padding-top: 10rem;
`;
