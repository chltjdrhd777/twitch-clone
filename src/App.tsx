import Body from "components/Body";
import Header from "components/Header";
import SideBar from "components/SideBar";
import React from "react";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header />
      <FlexDiv>
        <SideBar />
        <Body />
      </FlexDiv>
    </div>
  );
}

const FlexDiv = styled.div`
  display: flex;
`;

export default App;
