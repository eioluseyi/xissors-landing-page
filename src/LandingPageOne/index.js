import styled from "styled-components";

import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Clientele from "../common/sections/Clientele";
import Testimonials from "../common/sections/Testimonials";
import Download from "../common/sections/Download";
import Footer from "./sections/Footer";
import NextVersion from "src/common/components/NextVersion";
import { Link } from "react-router-dom";

export default () => {
	return (
		<Container>
			<Hero />
			<HowItWorks />
			<Clientele />
			<Testimonials />
			<Download appName="Xissors" />
			<Footer />
			<Link href="/version1">
				<NextVersion title="View version 2" href="/version2" />
			</Link>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	font-size: 18px;
`;
