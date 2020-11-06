import React from "react";
import styled from "styled-components";
import Channel from "./Channel";
import SearchIcon from "@material-ui/icons/Search";

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

      <div className="sidebar_bottom">
        <div className="sideBottomDiv">
          <SearchIcon />
          <input type="text" placeholder="Search to add friends" />
        </div>
      </div>
    </SidebarDiv>
  );
}

const SidebarDiv = styled.div`
  width: 13%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #1f1f23;
  height: 100vh;

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

  & .sidebar_bottom {
    bottom: 0;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #4f4f52;

    & .sideBottomDiv {
      background-color: #4f4f52;
      width: 90%;
      display: flex;
      height: 2.5rem;
      border-radius: 8px;
      align-items: center;
      padding-left: 10px;
      padding-right: 5px;

      & > input {
        background-color: transparent;
        border: none;
        outline: none;
        font-size: large;
        width: 100%;
        margin-left: 10px;
      }
    }
  }
`;

export default SideBar;
