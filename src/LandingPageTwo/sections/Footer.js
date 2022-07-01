import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { COLORS } from "src/styles";

import { ReactComponent as Facebook } from "../assets/facebook-icon.svg";
import { ReactComponent as Instagram } from "../assets/instagram-icon.svg";
import { ReactComponent as Twitter } from "../assets/twitter-icon.svg";

export default () => (
	<Container>
		<div className="container-box">
			<Logo className="logo" />
			<div className="bottom">
				<div className="left">
					<div className="questions">Got Questions?</div>
					<div className="email">
						<a href="mailto:hello@xissors.com">hello@xissors.com</a>
					</div>
				</div>
				<div className="right">
					<div className="social-handles">
						<a href="#">
							<Facebook />
						</a>
						<a href="#">
							<Instagram />
						</a>
						<a href="#">
							<Twitter />
						</a>
					</div>
					<div className="copyright">© Xissors 2022</div>
				</div>
			</div>
		</div>
	</Container>
);

const Container = styled.div`
	display: flex;
	padding: 0 3rem;

	.container-box {
		background-color: ${COLORS.primary};
		color: ${COLORS.white};

		width: 100%;
		margin: 0 auto;
		min-width: 20rem;
		max-width: 130rem;
		padding: 5rem 5rem 9.5rem;
		border-radius: 2.4rem 2.4rem 0 0;

		display: flex;
		flex-direction: column;
		align-items: center;

		.logo {
			width: 22.7rem;
		}

		.bottom {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			width: 100%;
			max-width: 70rem;
			margin-top: 5.5rem;
			gap: 5rem;

			justify-content: space-between;
		}

		.questions {
			line-height: 3.4rem;
			font-size: 2.1rem;
		}

		.email {
			margin-top: 0.5rem;
			font-size: 2.9rem;

			a {
				color: ${COLORS.white};
				text-decoration: none;
			}
		}

		.social-handles {
			display: flex;
			justify-content: space-between;

			a {
				opacity: 0.3;
			}
		}

		.copyright {
			margin-top: 2rem;
			font-size: 1.8rem;
			opacity: 0.6;
		}
	}
`;
