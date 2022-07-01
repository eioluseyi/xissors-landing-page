import styled from "styled-components";
import PhoneLayer from "../components/PhoneLayer";
import { ReactComponent as AppstoreDownload } from "../assets/appstore-download.svg";
import arrow from "../assets/swash-arrow.svg";
import { COLORS } from "src/styles";

export default ({ appName, showSuccess }) => (
	<Container>
		<h2 className="title">
			Download {appName}
			<br />
			Mobile App
		</h2>
		<div className="details">
			Download {appName} App on any iPhone from the App Store
		</div>
		<div className="appstore-download">
			<AppstoreDownload />
		</div>
		<PhoneLayer showSuccess={showSuccess} />
	</Container>
);

const Container = styled.div`
	text-align: center;
	/* max-width: 50rem; */
	margin: 0 auto;
	padding: 17rem 3rem;
	position: relative;

	.title {
		font-size: 5.6rem;
		font-weight: 700;
		color: ${COLORS.heading};
		margin-top: 0;
	}

	.details {
		font-size: 1.8rem;
		font-weight: 400;
		color: ${COLORS.text};
		max-width: 36rem;
		margin: 0 auto;
	}

	.appstore-download {
		margin: auto;
		margin-top: 3rem;
		max-width: fit-content;
		position: relative;

		& > svg {
			width: 19rem;
		}

		&::before {
			content: url(${arrow});
			position: absolute;
			left: -15rem;
			bottom: 0rem;

			@media only screen and (max-width: 550px) {
				display: none;
			}
		}
	}
`;
