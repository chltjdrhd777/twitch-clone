import React from "react";
import styled from "styled-components";

interface Props {
  avatar?: string;
  name: string;
  followers: string;
}

function Channel({ avatar, name, followers }: Props) {
  return (
    <ChannelDiv>
      <div className="channel_details">
        <img src={avatar} alt="avatar img" />
        <p>{name}</p>
      </div>

      <p>{followers}</p>
    </ChannelDiv>
  );
}

const ChannelDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  &:hover {
    background-color: #25252c;
  }

  & .channel_details {
    display: flex;
    align-items: center;

    & > img {
      object-fit: contain;
      margin-right: 5px;
      width: 40px;
      border-radius: 50%;
    }
  }
`;

export default Channel;
