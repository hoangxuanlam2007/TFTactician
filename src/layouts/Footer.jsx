import styled from "styled-components";
import { Link } from "react-router-dom";
import SelectDropdown from "components/common/SelectDropdown";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Footer() {

  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-links">
          <Link to="/privacy-policy">Chính sách bảo mật</Link>
          <a href="https://github.com/hoangxuanlam2007/TFTactician/blob/main/LICENSE" target="_blank" rel="noreferrer">Giấy phép nguồn mở</a>
          <a href="https://github.com/hoangxuanlam2007/TFTactician" target="_blank" rel="noreferrer">Mã nguồn</a>
          <a href="https://github.com/hoangxuanlam2007/TFTactician/issues" target="_blank" rel="noreferrer">Báo lỗi</a>
          <div className="language-btn">Ngôn ngữ 
            <div className="version">
            <SelectDropdown
              placeholder="Tiếng Việt"
              className="version-dropdown"
            />
            </div>
          </div>
        </div>
        <div className="divider footer"></div>
        <p className="footer-about">TFTactician is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
        <p className="footer-copyright">© TFTactician {(new Date().getFullYear())}</p>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: auto;
  font-size: 15px;
  padding: 30px 0;
  background: #102531;
  border-top: 1px solid #17313a;
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  @media (max-width: 1024px) {
    padding-left: 45px;
    padding-right: 45px;
  }
`;
