import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as AppstoreDownload } from "../assets/appstore-download.svg";
import heroBg from "../assets/hero-bg.png";
import crown from "src/common/assets/crown.svg";
import { COLORS } from "src/styles";

export default () => (
	<Container>
		<div className="top-bar">
			<Logo className="logo" />
			<a href="mailto:hello@xsissors.co" className="email">
				hello@xsissors.co
			</a>
		</div>
		<h1 className="headline">
			Get 40<span className="crown-percent">%</span> commission
			<br />
			for your sales
		</h1>
		<p className="sub-hero">
			We help stylists own their narrative, build an empire and be their own
			boss
		</p>
		<AppstoreDownload className="appstore-download" />
	</Container>
);

const Container = styled.div`
	/* background: url(${heroBg}); */
	background-repeat: no-repeat;
	background-size: cover;
	background-origin: bottom;
	background-position: center bottom;
	background-attachment: fixed;

	height: 100rem;
	padding: 6rem 3rem;
	box-sizing: border-box;
	max-width: 144rem;
	margin: 0 auto;
	overflow: hidden;

	/* text-align: center; */
	.top-bar {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 2rem;

		.logo {
			width: 13rem;
			filter: invert(1);
		}

		.email {
			/* margin: 0 0 0 auto; */
			color: ${COLORS.heading};
			text-decoration: none;
		}
	}

	.headline {
		font-size: 7rem;
		font-weight: 500;
		margin: 20rem 0 0;
		color: ${COLORS.heading};
		max-width: 48rem;
	}

	.crown-percent {
		position: relative;

		&::after {
			content: url(${crown});
			filter: invert(1);
			position: absolute;
			right: -5rem;
			top: -4rem;

			@media only screen and (max-width: 425px) {
				transform: scale(0.7);
				right: -6rem;
				top: -5rem;
			}

			@media only screen and (max-width: 300px) {
				transform: scale(0.6);
				right: -7rem;
				top: -6rem;
			}
		}
	}

	.sub-hero {
		font-size: 2rem;
		font-weight: 400;
		max-width: 47rem;
		margin: 2.2rem 0;
		color: ${COLORS.text};
	}

	.appstore-download {
		margin-top: 6rem;
		width: 19rem;
	}
`;
