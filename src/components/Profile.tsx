import React from "react";
import styled from "styled-components";
import RecentItems from "./RecentItems";

import background from "../img/free-images-anonymous-mask-download-high-definiton-wallpapers-windows-10-backgrounds-amazing-4k-free-download-wallpapers-quality-images-computer-wallpapers-1920x1080-1-1200x675.jpg";

function Profile() {
  return (
    <ProfileDiv>
      <div className="profile_top">
        <div className="profile_topLeft">
          <img src="" alt="avatarImg" />
          <div className="topleft-details">
            <h1>userName</h1>
            <h3>many followers</h3>
          </div>
        </div>

        <div className="profile_topRight">
          <i className="fas fa-heart gb"></i>
          <i className="fas fa-bell gb"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>

      <div className="profile_menue">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>

      <div className="profile_recent">
        <h2>Recent broadcasts</h2>
        <div className="recent_items">
          <RecentItems
            url="https://www.youtube.com/embed/6FEp7wH1c74"
            title="test"
          />
          <RecentItems
            url="https://www.youtube.com/embed/6FEp7wH1c74"
            title="test"
          />{" "}
          <RecentItems
            url="https://www.youtube.com/embed/6FEp7wH1c74"
            title="test"
          />{" "}
          <RecentItems
            url="https://www.youtube.com/embed/6FEp7wH1c74"
            title="test"
          />
        </div>

        <div className="profile_catagories">
          <h2>categories!</h2>
          <div className="categoryImg">
            <img src={background} alt="" />
          </div>

          <h3>test</h3>
        </div>
      </div>
    </ProfileDiv>
  );
}

const ProfileDiv = styled.div`
  background-color: #0e0e10;

  //? profile_top
  & .profile_top {
    & .profile_topLeft {
      display: flex;
      align-items: center;
      flex: 1;

      & > img {
        object-fit: contian;
        height: 90px;
        margin: 40px;
        border: 2px solid #35353a;
        border-radius: 50%;
        padding: 3px;
      }
    }

    & .profile_topRight {
      font-size: 30px;
      margin-left: 30px;
      & > i {
        margin: 10px;
        padding: 10px;
        border-radius: 8px;
        width: 40px;
        text-align: center;
      }

      & .gb {
        background-color: #35353a;
      }
    }
  }

  //? profile_menue
  & .profile_menue {
    display: flex;
    margin-left: 40px;
    margin-top: 30px;
    margin-bottom: 55px;

    & h2 {
      margin-right: 15px;
      cursor: pointer;

      & > i {
        transform: rotate(45deg);
        margin-right: -5px;
      }
    }
    & .active {
      color: #a970ff;
      border-bottom: 5px solid #a970ff;
      padding-bottom: 10px;
    }
  }

  ///? profile recent
  & .profile_recent {
    margin-left: 40px;
    & .recent_items {
      display: flex;
    }

    & .profile_catagories {
      margin-top: 40px;
      & > h2 {
        margin-bottom: 20px;
      }

      & > .categoryImg {
        width: 80px;
        height: 80px;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default Profile;
