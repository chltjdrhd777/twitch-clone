import React from "react";
import styled from "styled-components/macro";
import twitchLogo from "../img/twitch_PNG56.png";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <HeaderDiv>
      <div className="header_left">
        <img src={twitchLogo} alt="" className="twitch_logo" />
        <h2>Following</h2>
        <h2>Browse</h2>
        <div className="header_verticalLine"></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        <MoreHorizIcon className="Horiz_icon" />
      </div>

      <div className="header_center">
        <input type="text" placeholder="Search" />
        <div className="searchIcon_div">
          <SearchIcon />
        </div>
      </div>

      <div className="header_right">
        <div className="right_Container">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comments"></i>
        </div>

        <div className="right_Bits">
          <i className="fas fa-gem"></i>
          <h4>Get Bits</h4>
        </div>

        <Avatar className="header_avatar" />
      </div>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  height: 5rem;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  background-color: #18181b;
  z-index: 100;
  position: sticky;
  top: 0;

  //? Header_Left /////////////////////////////////////
  & .header_left {
    display: flex;
    align-items: center;
    flex: 1;
    margin-right: 100px;

    & .twitch_logo {
      object-fit: contain;
      height: 3rem;
      margin-left: 20px;
    }

    & > h2 {
      margin: 15px;
    }

    & .header_verticalLine {
      border-left: 1px solid #4a4a4c;
      height: 3rem;
    }

    & .Horiz_icon {
      margin-left: 10px;
    }
  }
  //? ////////////////////////////////////////////

  //? Hedaer_center//////////////////////////////
  & .header_center {
    display: flex;
    background-color: #4a4a4c;
    height: 3.5rem;
    width: 25%;
    border-radius: 8px;
    overflow: hidden;
    align-items: center;

    & > input {
      background-color: transparent;
      outline: none;
      border: none;
      flex: 1;
      margin-left: 10px;
      font-size: large;
    }

    & .searchIcon_div {
      background-color: #2b2b2d;
      width: 50px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  //? center_end ////////////////////////////////////////

  //? header right ///////////////////////////////////
  & .header_right {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    align-items: center;
    margin-right: 20px;

    & .right_Container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > i {
        margin: 20px;
      }
    }

    & .right_Bits {
      display: flex;
      align-items: center;
      background-color: #4a4a4c;
      height: 3.5rem;
      padding: 0px 20px;
      border-radius: 15px;
      margin: 20px;

      & > i {
        margin-right: 7px;
      }

      & > h4 {
        padding-bottom: 3.5px;
      }
    }

    & .header_avatar {
      margin-left: 30px;
    }
  }

  //? right_end /////////////////////////////////////
`;

export default Header;
