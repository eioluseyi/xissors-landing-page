import styled from "styled-components";
import "normalize.css";
import "./styles.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPageOne from "./LandingPageOne";
import LandingPageTwo from "./LandingPageTwo";

export default function App() {
	return (
		<MainWrapper>
			<HashRouter>
				<Routes>
					<Route path="/" element={<LandingPageOne />} />
					<Route path="/version1" element={<LandingPageOne />} />
					<Route path="/version2" element={<LandingPageTwo />} />
				</Routes>
			</HashRouter>
		</MainWrapper>
	);
}

const MainWrapper = styled.div``;
