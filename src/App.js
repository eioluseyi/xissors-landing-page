import styled from "styled-components";
import "normalize.css";
import "./styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPageOne from "./LandingPageOne";
import LandingPageTwo from "./LandingPageTwo";

export default function App() {
	return (
		<MainWrapper>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPageOne />} />
					<Route path="/version1" element={<LandingPageOne />} />
					<Route path="/version2" element={<LandingPageTwo />} />
				</Routes>
			</BrowserRouter>
		</MainWrapper>
	);
}

const MainWrapper = styled.div``;
