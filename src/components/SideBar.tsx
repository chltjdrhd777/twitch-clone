import React from "react";
import styled from "styled-components";
import Channel from "./Channel";

function SideBar() {
  return (
    <SidebarDiv>
      <div className="sidebar_top">
        <h5>followed channels</h5>
        <Channel name="channel1" followers="many1" />
        <Channel name="channel2" followers="many2" />

        <h5>recommended channels</h5>
        <Channel name="channel3" followers="many3" />
        <p className="sidebar_showMore">Show More</p>
      </div>

      <div className="sidebar_bottom"></div>
    </SidebarDiv>
  );
}

const SidebarDiv = styled.div`
  width: 13%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #1f1f23;

  & .sidebar_top {
    flex: 1;

    & .sidebar_showMore {
      color: #a970ff;
      cursor: pointer;
    }
  }

  & .sidebar_top > h5 {
    text-transform: uppercase;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

export default SideBar;
