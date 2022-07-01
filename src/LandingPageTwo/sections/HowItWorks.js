import styled from "styled-components";
import PhoneLayer from "../components/PhoneLayer";
import WorkingItems from "../components/WorkingItems";
import { COLORS } from "src/styles";

import earnIcon from "../assets/howItWorksImages/earn.png";
import collectIcon from "../assets/howItWorksImages/collect.png";
import thriveIcon from "../assets/howItWorksImages/thrive.png";

const workingItemsList = [
	{
		img: earnIcon,
		title: "Earn",
		details: "Earn a 40% commission on products you sell to your customers"
	},
	{
		img: collectIcon,
		title: "Collect",
		details:
			"Collect payments with only a tap from your phone. No hardware needed"
	},
	{
		img: thriveIcon,
		title: "Thrive",
		details:
			"Manage your earnings, customers and transactions, all from one app"
	}
];

export default () => (
	<>
		<Container>
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
		background: #f7f5ff;
		opacity: 0.8;
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
