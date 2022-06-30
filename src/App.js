import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPageOne from "./LandingPageOne";

import "normalize.css";
import "./styles.css";

export default function App() {
  return (
    <MainWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageOne />} />
          <Route path="/version1" element={<LandingPageOne />} />
          <Route path="/version2" element={<div>Hey!</div>} />
        </Routes>
      </BrowserRouter>
    </MainWrapper>
  );
}

const MainWrapper = styled.div``;
