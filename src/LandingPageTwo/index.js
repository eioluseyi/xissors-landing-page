import styled from "styled-components";

import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Clientele from "../common/sections/Clientele";
import Testimonials from "../common/sections/Testimonials";
import Download from "../common/sections/Download";
import Footer from "./sections/Footer";
import NextVersion from "src/common/components/NextVersion";
import GradientBackgroundElements from "./components/GradientBackgroundElements";

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
			<NextVersion title="View version 1" href="/version1" />
		</Container>
	);
};

const Container = styled.div`
	font-size: 18px;
	position: relative;
`;
