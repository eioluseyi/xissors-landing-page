import styled from "styled-components";

import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Clientele from "../common/sections/Clientele";
import Testimonials from "../common/sections/Testimonials";
import Download from "../common/sections/Download";
import Footer from "./sections/Footer";
import NextVersion from "src/common/components/NextVersion";
import GradientBackgroundElements from "./components/GradientBackgroundElements";
import { Link } from "react-router-dom";

export default () => {
	return (
		<Container>
			<GradientBackgroundElements />
			<Hero />
			<HowItWorks />
			<Clientele />
			<Testimonials />
			<Download appName="Xcissors" showSuccess={true} />
			<Footer />
			<Link href="/version1">
				<NextVersion title="View version 1" />
			</Link>
		</Container>
	);
};

const Container = styled.div`
	font-size: 18px;
	position: relative;
`;
