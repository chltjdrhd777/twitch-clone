import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import background from "../img/free-images-anonymous-mask-download-high-definiton-wallpapers-windows-10-backgrounds-amazing-4k-free-download-wallpapers-quality-images-computer-wallpapers-1920x1080-1-1200x675.jpg";
function Body() {
  return (
    <div className="body" style={{ height: "100vh" }}>
      <BodyDiv>
        <div className="body_left">
          <Profile />
        </div>
        <div className="body_right"></div>
      </BodyDiv>
    </div>
  );
}

const BodyDiv = styled.div`
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Body;
