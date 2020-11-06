import React from "react";
import styled from "styled-components";

interface Props {
  url?: string;
  title?: string;
}

function RecentItems({ url, title }: Props) {
  return (
    <ItemDiv>
      <iframe
        title="video"
        width="400"
        height="235"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encryted-media;"
      ></iframe>

      <div className="item_details">
        <img src="" alt="detailImg" />
        <div className="detail_text">
          <h4>{title}</h4>
          <p>user</p>
          <p>hash tag</p>
        </div>
      </div>
    </ItemDiv>
  );
}

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 20px;

  & .item_details {
    display: flex;
    margin-top: 25px;
    & > img {
      object-fit: contain;
      height: 60px;
      margin-right: 10px;
    }
  }
`;

export default RecentItems;
