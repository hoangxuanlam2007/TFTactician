import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Content(props) {
  const location = useLocation();
  const shouldRemove = location.pathname === "/privacy-policy" || location.pathname === "/update-notes";

  return (
    <ContentDefault id="content-default">
      <Wrapper className="wrapper">
        
      {/* Make the new set banner only appear on specific page */}
        {!shouldRemove && <Link className="version-update" id="version-update" to="/update-notes">
          <div className="update-title">
            Mùa 8.5 đã có mặt trên TFTactician!
          </div>
          <div className="update-subtitle">Ấn vào đây để tìm hiểu thêm</div>
        </Link>}
        {props.children}

      </Wrapper>
    </ContentDefault>
  );
}

export default Content;

const ContentDefault = styled.div`
  min-height: 100vh;
  background-color: #0d202b;
  @media (max-width: 1024px) {
    padding-left: 45px;
    padding-right: 45px;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  .version-update {
    position: relative;
    font-size: 21px;
    background: #102531;
    background-image: url(https://rerollcdn.com/update/set-8-5-update-bg.png);
    background-position: center -250px;
    background-size: cover;
    border: 1px solid #17313a;
    width: 100%;
    height: 100px;
    color: hsla(0, 0%, 100%, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    filter: saturate(1);
    cursor: pointer;
    transition: all 0.3s;
    margin: 0 auto 30px;
    text-decoration: none;
    &:hover {
      border-color: #227aad;
    }
    .update-title {
      font-weight: 600;
      font-size: 21px;
      margin-bottom: 7px;
    }
    .update-subtitle {
      font-size: 16px;
      color: #579dd4;
      font-weight: 400;
    }
  }
`;
