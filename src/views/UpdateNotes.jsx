import React from "react";
import styled from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function UpdateNotes() {

  return (
    <RootLayoutDefault id="root-layout">
        
    <h6
        style={{'margin': '20px 0', 'color': '#88a0a7'}}
    >Xem thông tin tại trang chính thức của Đấu Trường Chân Lý:</h6>
    <iframe title="Official Teamfight Tactics Website" src="https://teamfighttactics.leagueoflegends.com/vi-vn/news/game-updates/glitched-out-gameplay-overview/"></iframe>

    </RootLayoutDefault>
  );

}

const RootLayoutDefault = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  color: white;
  .my-content {
    background-color: #d47559;
    text-align: center;
    padding: 3px 0;
    a {
      text-decoration: none;
      color: #12407c;
    }
  }
`;

export default UpdateNotes;
